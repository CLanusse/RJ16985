import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const useCollection = (coleccion, catId) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        
        setLoading(true)

        // 1.- Armar la referencia
        const collectionRef = collection(db, coleccion)
        const q = catId ? query(collectionRef, where('category', '==', catId)) : collectionRef
        // 2. Petición a esa referencia
        getDocs(q)
            .then((snapshot) => {
                const items = snapshot.docs.map((doc) => ({
                        id: doc.id, 
                        ...doc.data()
                    })
                )
                setData(items)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return {
        loading,
        data
    }
}
