import React , { useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css"
import { Link} from 'react-router-dom';

const CartWidget = () => {

  const {cantidadEnCarrito} = useContext(CartContext);
  return (
    <div className="nav-cart">
        <Link className='nav-link' to='/carrito'>Carrito <span className="numerito"></span>{cantidadEnCarrito()}</Link>
    </div>
  )
}

export default CartWidget