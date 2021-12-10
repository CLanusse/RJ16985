import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    useEffect(() => {
        
        setLoading(true)

        // 1.- Armar la referencia
        const productosRef = collection(db, "productos")
        const q = catId ? query(productosRef, where('category', '==', catId)) : productosRef
        // 2. Petición a esa referencia
        getDocs(q)
            .then((snapshot) => {
                const items = snapshot.docs.map((doc) => ({
                        id: doc.id, 
                        ...doc.data()
                    })
                )
                setProductos(items)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return (
        <>
            {
                loading 
                    ? <Loader/>
                    : <ItemList items={productos}/>
            }
        </>
    )
}
