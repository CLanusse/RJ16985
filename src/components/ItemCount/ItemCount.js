import React from 'react'
import { btnConfig } from './btnConfig'

export const ItemCount = ( {max, setCantidad, cantidad, onAdd} ) => {

    const handleRestar = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const config = btnConfig(cantidad, max, handleSumar, handleRestar)

    return (
        <div className="my-3">
            <button {...config.restar}>
                -
            </button>

            <span className="mx-2">{cantidad}</span>

            <button {...config.sumar}>
                +
            </button>
            <br/>
            <button 
                className="btn btn-success my-2" 
                onClick={onAdd}
                disabled={cantidad === 0}
            >
                Agregar al carrito
            </button>
        </div>
    )
}
