import React from 'react'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { FaCartPlus } from 'react-icons/fa'
import './CartWidget.scss'

export const CartWidget = () => {


    return (
        <div>
            <FaCartPlus className="cartWidget"/>
        </div>
    )
}
