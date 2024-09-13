import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, doc, getDoc, writeBatch } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState('');
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const actualizarStock = async () => {
    const batch = writeBatch(db);
    for (let item of carrito) {
      const productRef = doc(db, 'productos', item.id);
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) {
        const productData = productSnap.data();
        const nuevoStock = productData.stock - item.cantidad;
        if (nuevoStock >= 0) {
          batch.update(productRef, { stock: nuevoStock });
        }
      }
    }
    await batch.commit();
  };

  const comprar = async (data) => {
    const pedido = {
      cliente: data,
      items: carrito,
      total: precioTotal(),
    };

    console.log(pedido);
    const pedidosColleccion = collection(db, 'pedidos');

    try {
      const docRef = await addDoc(pedidosColleccion, pedido);
      setPedidoId(docRef.id);
      await actualizarStock();
      vaciarCarrito();
    } catch (error) {
      console.log('Error al realizar la compra: ', error);
    }
  };

  if (pedidoId) {
    return (
      <div className="container-checkout">
        <h2 className="main-title-compra">Gracias por su compra</h2>
        <h3 className="main-title-compra">Su pedido se ha realizado con éxito</h3>
        <h3 className="main-title-compra">Su pedido es: {pedidoId}</h3>
        <Link className='nav-link-checkout' to='/'>Ir a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="main-title-checkout">Finalizar Compra</h2>
      <form className="formulario-contacto" onSubmit={handleSubmit(comprar)}>
        <input 
          type="text" 
          placeholder="Ingresa tu nombre" 
          {...register('nombre', { required: 'El nombre es obligatorio' })} 
        />
        {errors.nombre && <p className="error">{errors.nombre.message}</p>}
        
        <input 
          type="email" 
          placeholder="Ingresa tu email" 
          {...register('email', { 
            required: 'El email es obligatorio', 
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Ingresa un email válido'
            }
          })} 
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        
        <input 
          type="phone" 
          placeholder="Ingresa tu telefono" 
          {...register('telefono', { required: 'El teléfono es obligatorio' })} 
        />
        {errors.telefono && <p className="error">{errors.telefono.message}</p>}

        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};

export default Checkout;