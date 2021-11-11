import React from 'react'

export const Item = ({id, name, img, desc, price}) => {

    return (
        <article key={id} className="card m-3" style={{width: "18rem"}}>
            <img src={img} alt={name}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">{desc}</p>
                <button className="btn btn-primary">Agregar</button>
            </div>
        </article>
    )
}
