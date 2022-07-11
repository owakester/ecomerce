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



  const mensajeFinal =()=> cart.reduce((acum,valor)=>acum+valor.price*valor.cantidad,0)


  const removeItem = (id) => {
    const newCart = [...cart];
    let index = newCart.findIndex((el) => el.id === id);

    newCart.splice(index, 1);

    setCart([...newCart]);
  };
  



const totalPrecio =()=> cart.reduce((acum,valor)=>acum+valor.price*valor.cantidad,0)









  const iconCart = () => cart.reduce((acum, valor) => acum + valor.cantidad, 0); // suma todos los elementos del array

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        vaciarCarrito,
        removeItem,
        iconCart,
        totalPrecio,
        mensajeFinal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
