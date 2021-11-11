import { stock } from "../data/stock"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(stock)
        }, 1500)
    })
}