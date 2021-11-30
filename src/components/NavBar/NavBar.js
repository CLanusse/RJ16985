import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'

export const NavBar = () => {

    
    return (
    
    <header className="header">
        <Link to="/"><h1>Logo</h1></Link>

        <nav>
            <ul>
                <li><Link to="productos/zapatillas">Zapatillas</Link></li>
                <li><Link to="productos/remeras">Remeras</Link></li>
                <li><Link to="productos/buzos">Buzos</Link></li>
            </ul>
        </nav>
        
        <CartWidget/>
        
    </header>
    )
}


// export default NavBar