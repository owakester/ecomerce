import React from "react";
import App from "../../App";
import { useCartContext } from "../CartContext";

const Cart = () => {
  const { cart, vaciarCarrito } = useCartContext();
  return (
    <div className="bg-gray-500 rounded m-5 shadow-md">
      <ul>
        {cart.map((item) => (
          <li className="border" key={item.id}>
            <div className="w-25">
              <img src={item.pictureUrl} className="h-24" />
            </div>
            nombre: {item.name} precio: {item.price} cantidad: {item.cantidad}
          </li>
        ))}
      </ul>

      <div>
        <button className="bg-green-500 rounded p-2" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
