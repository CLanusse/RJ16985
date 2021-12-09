import React from 'react'
import { btnConfig } from './btnConfig'

export const ItemCount = ( {sumar, restar, cantidad, onAdd, max} ) => {

    const config = btnConfig(cantidad, max)

    return (
        <div className="my-3">
            <button {...config.restar} onClick={restar}>
                -
            </button>

            <span className="mx-2">{cantidad}</span>

            <button {...config.sumar} onClick={sumar}>
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
