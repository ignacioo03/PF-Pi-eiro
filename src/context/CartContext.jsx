import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || [];


// CartProvider para agregar al carrito 
export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);
    const addToCart = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const isInCart = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (isInCart) {
            isInCart.cantidad += cantidad;


        } else { 
            nuevoCarrito.push(itemAgregado);


        }
        setCarrito(nuevoCarrito);
    };



    // Calculo de la cantidad agregada en carrito
    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }


    // Calculo del precio total
    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
    }


    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])


    return (
        <CartContext.Provider value={{ 
        carrito,
        addToCart,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito 
        }}>
            {children}
        </CartContext.Provider>
    )

}