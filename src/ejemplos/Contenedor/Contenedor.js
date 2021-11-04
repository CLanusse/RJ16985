import React from 'react'


export const Contenedor = ( {children} ) => {
  
    return (
        <div style={{
            width: "80%",
            margin: "auto"
        }}>
            
            <h2>Componente contenedor</h2>
            <hr/>

            {children}

        </div>
    )
}
