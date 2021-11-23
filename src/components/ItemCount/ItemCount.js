import React from 'react'

export const ItemCount = ( {max, setCantidad, cantidad, onAdd} ) => {

    

    const handleRestar = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div className="my-3">
            <button className="btn btn-outline-primary" onClick={handleRestar}>
                -
            </button>
            <span className="mx-2">{cantidad}</span>
            <button className="btn btn-primary" onClick={handleSumar}>
                +
            </button>
            <br/>
            <button className="btn btn-success my-2" onClick={onAdd}>
                Agregar al carrito
            </button>
        </div>
    )
}
