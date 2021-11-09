import React, {useEffect, useState} from 'react'
import './Clicker.scss'

export const Clicker = () => {

    const [clicks, setClicks] = useState({
        x: 0,
        y: 0
    })



    useEffect(() => {
        console.log("Me monté")

        const handleClick = ({x, y}) => {
            console.log(x, y)
            setClicks({
                x, y
            })
        }

        window.addEventListener('click', handleClick)

        return () => {
            console.log("Me desmonté")
            window.removeEventListener('click', handleClick)
        }
    }, [])


    return (
        <div>
            <p>X: {clicks.x}</p>
            <p>Y: {clicks.y}</p>
        </div>
    )
}
