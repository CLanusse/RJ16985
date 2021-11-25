import React, { useContext } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    return (
        <div>
            <FaCartPlus className="cartWidget"/>
            <span>{totalCantidad()}</span>
        </div>
    )
}
