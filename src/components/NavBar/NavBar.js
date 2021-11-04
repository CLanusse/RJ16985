import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'

export const NavBar = () => {

    
    return (
    
    <header className="header">
        <h1>Logo</h1>

        <nav>
            <ul>
                <li>Enlace 1</li>
                <li>Enlace 2</li>
                <li>Enlace 3</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
    )
}


// export default NavBar