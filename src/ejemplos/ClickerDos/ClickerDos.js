import React, {useEffect, useState} from 'react'
import './Clicker.scss'

export const ClickerDos = () => {

    const [clicks, setClicks] = useState(0)

    const handleClicks = (e) => {
        console.log(e)
        console.log(e.nativeEvent)
        setClicks( clicks + 1 )
    }

    useEffect(() => {
        console.log("Me monté")


        return () => {
            console.log("Me desmonté")
        }
    }, [])

    // useEffect(() => {
    //     console.log('Clicks actualizados')

    // }, [clicks])


    return (
        <div onClick={handleClicks} className={ clicks % 2 === 0 ? 'green' : 'red'}>
            <p>Clicks: {clicks}</p>
            <p>FyH: {new Date().toLocaleString()}</p>
        </div>
    )
}
