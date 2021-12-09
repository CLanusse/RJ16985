import { writeBatch, collection, query, where, documentId, getDocs, addDoc, Timestamp } from 'firebase/firestore/lite'
import Swal from 'sweetalert2'
import { db } from './config'

export const generarOrden = async (values, carrito, totalCompra, vaciarCarrito) => {

    const orden = {
        buyer: {...values},
        items: carrito,
        total: totalCompra(),
        date: Timestamp.fromDate( new Date() )
    }

    const batch = writeBatch(db)

    const ordersRef = collection(db, "orders")
    const productosRef = collection(db, "productos")
    const q = query(productosRef, where(documentId(), 'in', carrito.map(el => el.id)))

    const outOfStock = []

    const productos = await getDocs(q)
    
    productos.docs.forEach((doc) => {
        const itemToUpdate = carrito.find((prod) => prod.id === doc.id)

        if (doc.data().stock >= itemToUpdate.cantidad) {
            batch.update(doc.ref, {
                stock: doc.data().stock - itemToUpdate.cantidad
            })
        } else {
            outOfStock.push(itemToUpdate)
        }
    })

    if (outOfStock.length === 0) {    
        addDoc(ordersRef, orden)
            .then((res) => {
                batch.commit()   
                Swal.fire({
                    icon: 'success',
                    title: 'Su orden ha sido registrada',
                    text: `Su número de orden es: ${res.id}`                        
                })
                vaciarCarrito()
            })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'No hay stock de los siguientes productos:',
            text: outOfStock.map(el => el.name).join(', ')
        })
    }
}