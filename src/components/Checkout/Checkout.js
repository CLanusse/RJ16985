import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'
import { collection, getDocs, query, where, addDoc, documentId, Timestamp, doc, writeBatch } from 'firebase/firestore/lite'
import { Link } from 'react-router-dom'
import { Loader } from '../Loader/Loader'

export const Checkout = () => {

    const { carrito, totalCompra, vaciarCarrito } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        tel: ''
    })
    
    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 4) {
            alert("Nombre inválido")
            return
        }
        if (values.email.length < 6) {
            alert("Email inválido")
            return
        }
        if (values.tel.length < 8) {
            alert("Teléfono inválido")
            return
        }

        const order = {
            buyer: values,
            items: carrito,
            total: totalCompra(),
            date: Timestamp.fromDate( new Date() )
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), 'in', carrito.map(el => el.id)))

        const outOfStock = []

        setLoading(true)
        getDocs(q)
            .then((res) => {
                res.docs.forEach((doc) => {
                    const itemInCart = carrito.find((prod) => prod.id === doc.id)

                    if (doc.data().stock >= itemInCart.cantidad) {
                        batch.update(doc.ref, {
                            stock: doc.data().stock - itemInCart.cantidad
                        })
                    } else {
                        outOfStock.push(itemInCart)
                    }
                })

                if (outOfStock.length === 0) {

                    addDoc(ordersRef, order)
                        .then((res) => {
                            batch.commit()
                            setOrderId(res.id)
                            vaciarCarrito()
                            setLoading(false)
                        })
                } else {
                    alert("No hay stock de los siguientes productos: " + outOfStock.map(el => el.name).join(', '))
                    setLoading(false)
                }
            })
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="container my-5">

            {
                orderId 
                ? <>
                    <h2>Tu compra fue registrada!</h2>
                    <hr/>
                    <p>Tu número de orden es: {orderId}</p>
                    <Link to="/" className='btn btn-success'>Volver</Link>
                </>

                : <>
                    <h2>Checkout</h2>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <input
                            name="nombre"
                            onChange={handleInputChange}
                            value={values.nombre}
                            className='form-control my-2'
                            type="text"
                            placeholder="Nombre"
                        />
                        <input
                            name='email'
                            onChange={handleInputChange}
                            value={values.email}
                            className='form-control my-2'
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            name='tel'
                            onChange={handleInputChange}
                            value={values.tel}
                            className='form-control my-2'
                            type="tel"
                            placeholder="Teléfono"
                        />

                        <button type='submit' className='btn btn-success'>Enviar</button>
                    </form>
                </>
            }
        </div>
    )
}



// carrito.forEach((prod) => {
//     const docRef = doc(productosRef, prod.id)

//     getDoc(docRef)
//         .then((doc) => {
//             if (doc.data().stock >= prod.cantidad) {
//                 updateDoc(docRef, {
//                     stock: doc.data().stock - prod.cantidad
//                 })
//             }
//         })
// })
