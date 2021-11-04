import './HomeView.css'

export const HomeView = ( {titulo, contenido} ) => {

    // console.log(props.titulo)
    // console.log(props.contenido)
    // const {titulo, contenido} = props

    return (
        <main className="homeView">
            <h2>{titulo}</h2>
            <hr/>

            <p>{contenido}</p>
        </main>
    )
}