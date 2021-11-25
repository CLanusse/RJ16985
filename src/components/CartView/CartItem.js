import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'

export const CartItem = ({name, price, cantidad, id}) => {

    const {removerDelCarrito} = useContext(CartContext)

    return (
        <div>
            <h3>{name}</h3>
            <p>Precio: ${price}</p>
            <p>Cantidad: {cantidad}</p>
            <button 
                className="btn btn-danger"
                onClick={() => { removerDelCarrito(id) }}
            >
                <BsFillTrashFill/>
            </button>
        </div>
    )
}
