import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { db } from '../../firebase/config'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader/Loader'
import { doc, getDoc } from 'firebase/firestore/lite'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(()=>{

        setLoading(true)

        // 1.- Armo la referencia al doc
        const docRef = doc(db, "productos", itemId)
        // 2.- Petición a esa ref
        getDoc(docRef)
            .then((doc) => {
                setItem( {
                    id: doc.id,
                    ...doc.data()
                } )
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div className="container my-5">
            {
                loading
                 ? <Loader/>
                 : <ItemDetail {...item}/>
            }


        </div>
    )
}
