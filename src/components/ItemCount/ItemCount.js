import React from 'react'

export const ItemCount = ( {max, setCantidad, cantidad, onAdd} ) => {

    const handleRestar = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const config = {
        className: `btn ${cantidad === 0 ? "btn-outline-danger" : "btn-outline-primary"}`,
        disabled: cantidad === 0,
        onClick: handleRestar
    }

    return (
        <div className="my-3">
            <button {...config}>
                -
            </button>
            <span className="mx-2">{cantidad}</span>
            <button 
                className={cantidad === max ? "btn btn-danger" : "btn btn-primary"}
                disabled={cantidad === max}
                onClick={handleSumar}
            >
                +
            </button>
            <br/>
            <button className="btn btn-success my-2" onClick={onAdd} disabled={cantidad===0}>
                Agregar al carrito
            </button>
        </div>
    )
}
