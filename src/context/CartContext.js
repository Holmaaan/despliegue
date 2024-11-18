import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Función para añadir un producto al carrito
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingProduct = prevItems.find(item => item.id === product.id);
            if (existingProduct) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    // Función para actualizar la cantidad de un producto
    const updateQuantity = (id, newQuantity) => {
        setCartItems((prevItems) => 
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
