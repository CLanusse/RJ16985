import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, name, img, desc, price, category, stock}) => {

    const navigate = useNavigate()
    
    const [cantidad, setCantidad] = useState(0)
    const [agregado, setAgregado] = useState(false)
    
    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    const handleAgregar = () => {
        if (cantidad > 0) {
            console.log('Item agregado:', {
                id,
                name,
                price,
                cantidad
            })
        
            setAgregado(true)
        }   
    }

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
            <p>{desc}</p>
            <p>Precio: ${price}</p>

            {
                !agregado 
                ?   <ItemCount 
                        max={stock} 
                        cantidad={cantidad} 
                        setCantidad={setCantidad}
                        onAdd={handleAgregar}
                    />
                :   <Link to="/cart" className="btn btn-success d-block">Terminar mi compra</Link>
            }

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
            <button className="btn btn-outline-primary" onClick={handleVolverInicio}>Volver al inicio</button>
        </div>
    )
}
