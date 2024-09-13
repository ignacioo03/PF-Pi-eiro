import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Carrito.css'

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);


    const handleVaciar = () => {
        vaciarCarrito();
    }
    return (
        <div className="carrito-container">
            <h2 className='carrito'>Carrito</h2>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h3 className='prod-carrito'>{prod.titulo}</h3>
                        <p className='precio-carrito'>Precio Unit: ${prod.precio}</p>
                        <p className='precio-carrito'>Precio Total: ${prod.precio * prod.cantidad}</p>
                        <p className='cantidad-carrito'>Cantidad: {prod.cantidad}</p>
                        <img className="imagen" src={prod.imagen} alt={prod.titulo} />


                    </div>
                ))
            }

            {
                carrito.length > 0 ? (
                    <>
                        <h2 className='total'>Precio Total: {precioTotal()} </h2>
                        <button className='vaciar' onClick={handleVaciar}>VACIAR</button>
                        <Link className='finalizar' to='/checkout'>finalizar compra</Link>
                    </>
                ) : (
                    <h2 className='carrito-vacio'>Carrito vacío</h2>
                )
            }
        </div>
    )
}

export default Carrito
