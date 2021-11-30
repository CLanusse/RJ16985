
export const btnConfig = (cantidad, max, handleSumar, handleRestar) => {
    return {
        restar: {
            className: `btn ${cantidad === 0 ? 'btn-outline-danger' : 'btn-outline-primary'}`,
            onClick: handleRestar,
            disabled: cantidad === 0
        },
        sumar: {
            className: `btn ${cantidad === max ? 'btn-danger' : 'btn-primary'}`,
            onClick: handleSumar,
            disabled: cantidad === max
        }
    }
}