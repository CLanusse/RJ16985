import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { validarDatos } from '../../helpers/validarDatos'
import { generarOrden } from '../../firebase/generarOrden'
import { Formik } from 'formik'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Este campo es obligatorio')
                .min(3, 'Demasiado corto')
                .max(20, 'Demasiado largo'),
    apellido: Yup.string()
                .required('Este campo es obligatorio')
                .min(3, 'Demasiado corto')
                .max(20, 'Demasiado largo'),
    email: Yup.string()
                .required('Este campo es obligatorio')
                .email('Email inválido')
})

export const Checkout = () => {

    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)

    const initialValues =  {
        nombre: '',
        apellido: '',
        email: ''
    }

    return (

        <>
            {carrito.length === 0 
                ? <Navigate to="/"/>
                :
                    <div className="container my-5">
                        <h2>Resumen de compra</h2>
                        <hr/>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={schema}
                            onSubmit={ (values) => {
                                generarOrden(values, carrito, totalCompra, vaciarCarrito)
                            }}
                        >
                            {(formik) => (
                                <form onSubmit={formik.handleSubmit}>
                                    <input
                                        onChange={formik.handleChange}
                                        name="nombre"
                                        value={formik.values.nombre}
                                        className="form-control my-2"
                                        type="text"
                                        placeholder="nombre"
                                    />
                                    {formik.errors.nombre && <small>{formik.errors.nombre}</small>}

                                    <input
                                        onChange={formik.handleChange}
                                        name="apellido"
                                        value={formik.values.apellido}
                                        className="form-control my-2"
                                        type="text"
                                        placeholder="apellido"
                                    />
                                    {formik.errors.apellido && <small>{formik.errors.apellido}</small>}

                                    <input
                                        onChange={formik.handleChange}
                                        name="email"
                                        value={formik.values.email}
                                        className="form-control my-2"
                                        type="email"
                                        placeholder="email"
                                    />
                                    {formik.errors.email && <small>{formik.errors.email}</small>}

                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </form>
                            )}
                        </Formik>

                    </div>
            }
        </>
    )
}



// carrito.forEach((prod) => {
//     const docRef = doc(productosRef, prod.id)
//     getDoc(docRef)
//         .then((doc) => {
//             updateDoc(doc.ref, {
//                 stock: doc.data().stock - prod.cantidad
//             })
//         })
// })