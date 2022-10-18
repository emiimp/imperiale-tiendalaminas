import CartShoppingSolid from '../../Assets/CartShoppingSolid.svg';
import { NavLink  } from 'react-router-dom';

const NavBar = () => {
    return(
            <nav className='navbar-container'>
            <ul>
                <li><NavLink  to={"/laminas"}>Nuestras láminas</NavLink ></li>
                <li><NavLink  to={"/category/photography"}>Fotografía</NavLink ></li>
                <li><NavLink  to={"/category/painting"}>Pintura</NavLink ></li>
                <li><NavLink  to={"/cart"}>Carrito de compras</NavLink ></li>
            </ul>
        </nav>
        ); 
};

export default NavBar;