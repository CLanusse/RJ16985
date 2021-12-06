import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loader } from '../Loader/Loader'
import { doc, getDoc, collection } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'

export const ItemDetailContainer = () => {



    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(()=>{

        setLoading(true)

        const productosRef = collection(db, 'productos')
        const docRef = doc(productosRef, itemId)
        
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(()=>{
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
