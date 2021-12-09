import { useEffect, useState } from 'react'


export const useFetch = (url, dependencies = []) => {

    const [data, setData] = useState(null)

    useEffect(() => {

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, dependencies)

    return {
        data
    }
}
