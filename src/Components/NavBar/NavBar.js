import CartShoppingSolid from '../../Assets/CartShoppingSolid.svg';
import style from '../../Components/NavBar/style.css';
import { NavLink  } from 'react-router-dom';

const NavBar = () => {
    return(
            <nav className='navbar-container'>
            <ul>
                <li><NavLink  to={"/inicio"}>Inicio</NavLink ></li>
                <li><NavLink  to={"/laminas"}>Nuestras láminas</NavLink ></li>
                <li><NavLink  to={"/category/Oferta"}>Ofertas del mes</NavLink ></li>
                <li><NavLink  to={"/contacto"}>Contacto</NavLink ></li>
                <img src={CartShoppingSolid} className='navbar-logo' alt='cart'/>
            
            </ul>
        </nav>
        ); 
};

export default NavBar;