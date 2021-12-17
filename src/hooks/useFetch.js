import React, { useEffect, useState } from 'react'


export const useFetch = (url, dependencias = []) => {

    const [data, setData] = useState(null)

    useEffect(() => {

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })

    }, dependencias)

    return {
        data
    }
}
