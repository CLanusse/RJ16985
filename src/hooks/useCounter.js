import { useState } from 'react'

export const useCounter = (initial = 0, max = 10, min = 0) => {

    const [counter, setCounter] = useState(initial)

    const restar = () => {
        counter > min && setCounter(counter - 1)
    }

    const sumar = () => {
        counter < max && setCounter(counter + 1)
    }

    return {
        counter,
        sumar,
        restar
    }
}
