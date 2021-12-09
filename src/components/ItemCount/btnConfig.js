
export const btnConfig = (cantidad, max) => {
    return {
        restar: {
            className: `btn ${cantidad === 0 ? 'btn-outline-danger' : 'btn-outline-primary'}`,
            disabled: cantidad === 0
        },
        sumar: {
            className: `btn ${cantidad === max ? 'btn-danger' : 'btn-primary'}`,
            disabled: cantidad === max
        }
    }
}