import React from 'react'

export const Memo = React.memo(() => {

    console.log("me rendericé")

    return (
        <div>
            Soy el memo
        </div>
    )
})
