import React, { useState } from 'react'


export const Formulario = () => {

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: ''
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(values)
    }
    
    return (
        <form className="container m-5" onSubmit={handleSubmit}>
            <input
                onChange={handleInputChange}
                name="nombre"
                value={values.nombre}
                className="form-control my-2"
                type="text"
                placeholder="nombre"
            />
            {values.nombre.length < 4 && <small>Nombre inválido</small>}

            <input
                onChange={handleInputChange}
                name="apellido"
                value={values.apellido}
                className="form-control my-2"
                type="text"
                placeholder="apellido"
            />
            {values.apellido.length < 4 && <small>Apellido inválido</small>}

            <input
                onChange={handleInputChange}
                name="email"
                value={values.email}
                className="form-control my-2"
                type="email"
                placeholder="email"
            />
            {values.email.length < 4 && <small>Email inválido</small>}

            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}


// const [nombre, setNombre] = useState('')
// const [apellido, setApellido] = useState('')

// const handleNombre = (e) => {
//     console.log(e.target.value)
//     setNombre(e.target.value)
// }

// const handleApellido = (e) => {
//     console.log(e.target.value)
//     setApellido(e.target.value)
// }