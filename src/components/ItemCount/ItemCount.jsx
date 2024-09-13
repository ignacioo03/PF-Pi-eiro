import React, { useContext, useState } from 'react';
import './ItemCount.css';
import { CartContext } from '../../context/CartContext';

const ItemCount = ({ item }) => {
  const { carrito, addToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const decrement = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const increment = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div>
      <div className="item-count">
        <button onClick={decrement}>-</button>
        <p>{cantidad}</p>
        <button onClick={increment}>+</button>
      </div>
      <button
        className="agregar-al-carrito"
        onClick={() => addToCart(item, cantidad)}
        disabled={item.stock === 0}
      >
        {item.stock === 0 ? 'SIN STOCK' : 'AGREGAR AL CARRITO'}
      </button>
    </div>
  );
};

export default ItemCount;