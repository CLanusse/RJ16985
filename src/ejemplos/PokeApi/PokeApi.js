import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

// query = sting ; limit = number
// const API_KEY = 123456
// const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=javascript&limit=15`
// const pokeUrl = "https://pokeapi.co/api/v2/pokemon/pikachu"

// fetch("https://pokeapi.co/api/v2/pokemon/", {
//     method: "POST",
//     headers: {
//         Authorization: "Token 123456"
//     },
//     body: {
//         items: [1, 2, 3]
//     }
// })

export const PokeApi = () => {

    const [id, setId] = useState(1)
    const {data: pokemon} = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id])

    const handleAnterior = () => {
        id > 1 && setId( id - 1)
    }

    const handleSiguiente = () => {
        setId( id + 1 )
    }

    return (
        <div className="container my-5">
            <h2>Poke Api</h2>
            <hr/>

            { pokemon !== null && 
                <>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </>
            }

            <hr/>
            <button className="btn btn-outline-primary mx-4" onClick={handleAnterior} disabled={id == 1}>
                Anterior
            </button>
            <button className="btn btn-primary" onClick={handleSiguiente}>
                Siguiente
            </button>
            
        </div>
    )
}
