import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'

export const CartView = () => {

    const {carrito, vaciarCarrito} = useContext(CartContext)

    return (
        <div className="container my-5">
            {
                carrito.length > 0 
                ?   <>
                        <h2>Cart View</h2>
                        <hr/>
                        <section>
                            {
                                carrito.map((prod) => <CartItem {...prod}/>)
                            }
                        </section>
                        <hr/>
                        <div>
                            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
                            <button className="btn btn-success mx-2">Terminar mi compra</button>
                        </div>
                    </>
                
                :   <>
                        <h2>No agregaste items al carrito aún</h2>
                        <hr/>
                        <Link to="/" className="btn btn-primary">Volver</Link>
                    </>
            }
        </div>
    )
}
