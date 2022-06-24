import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  // estados y funciones
  const [cart, setCart] = useState([]);

  const isInCart = (item) => {
    return cart.find((film) => film.id === item.id);
  };

  const addToCart = (item) => {
    if (isInCart(item)) {
      cart.find((el) => el.id === item.id).cantidad += item.cantidad;
    } else {
      setCart([...cart, item]);
    }
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        vaciarCarrito,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
