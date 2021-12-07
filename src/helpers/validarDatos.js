import Swal from "sweetalert2"


export const validarDatos = (values) => {

    if (values.nombre.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre inválido'
        })
        return false
    }

    if (values.apellido.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Apellido inválido'
        })
        return false
    }
    
    if (values.email.length < 7) {
        Swal.fire({
            icon: 'error',
            title: 'Email inválido'
        })
        return false
    }

    if (values.emailConfirm !== values.email) {
        Swal.fire({
            icon: 'error',
            title: 'Los emails no coinciden'
        })
        return false
    }

    return true
}