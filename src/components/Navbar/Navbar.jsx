import './Navbar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to="/" className='titulo'>Pastas La Hilda 🍜</Link>
      </div>
      <div className='navbar-links'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to="/productos" >Productos</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/productos/Fideos'>Fideos</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/productos/Ravioles'>Ravioles</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/productos/Salsas'>Salsas</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/productos/Especiales'>Especiales</Link>
          </li>
          <li className='nav-item'>
            <CartWidget />
          </li>
          
        </ul>
        </div>
    </nav>
  );
}

export default Navbar;