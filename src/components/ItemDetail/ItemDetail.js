import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useCounter } from '../../hooks/useCounter'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, name, img, desc, price, category, stock}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    const { counter, sumar, restar } = useCounter(0, stock, 0)

    const navigate = useNavigate()
  
    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    const handleAgregar = () => {
        if (counter > 0) {
            agregarAlCarrito({
                id,
                name,
                price,
                img,
                cantidad: counter
            })
        }   
    }

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{desc}</p>
            <p>Precio: ${price}</p>

            {
                !isInCart(id)
                    ?   <ItemCount 
                            max={stock}
                            cantidad={counter} 
                            sumar={sumar}
                            restar={restar}
                            onAdd={handleAgregar}
                        />
                    :   <Link to="/cart" className="btn btn-success d-block">Terminar mi compra</Link>
            }

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
            <button className="btn btn-outline-primary" onClick={handleVolverInicio}>Volver al inicio</button>
        </div>
    )
}
