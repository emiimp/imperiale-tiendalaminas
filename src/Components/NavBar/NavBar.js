import CartShoppingSolid from '../../Assets/CartShoppingSolid.svg';
import style from '../../Components/NavBar/style.css';

const NavBar = () => {
    return(
            <nav className='navbar-container'>
            <ul>
                <li><a>Inicio</a></li>
                <li><a>Nuestras láminas</a></li>
                <li><a>Ofertas del mes</a></li>
                <li><a>Contacto</a></li>
                <img src={CartShoppingSolid} className='navbar-logo' alt='cart'/>
            </ul>
        </nav>
        ); 
};

export default NavBar;