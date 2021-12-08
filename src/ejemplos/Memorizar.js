import React from 'react'

export const Memorizar = React.memo(() => {

    console.log("Me rendericé =( ")

    return (
        <div>
            Soy el memo
        </div>
    )
})
