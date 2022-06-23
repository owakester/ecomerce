import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {Animated} from "react-animated-css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Item = ( item ) => {

  const cartContext = useContext(CartContext);
  const { addToCart} = cartContext;

  const onAdd = (contador) => {
    addToCart(item, contador)
  }

  return (
    <article className="product-card mb-8 ">
      <img className="rounded-t w-56 h-48 mx-auto " src={item.pictureUrl} alt="" />

{      <ItemCount stock={item.stock} onAdd={onAdd} initial={1} /> }

      <div className="bg-gray-200 w-56 mx-auto rounded-b-lg">
        <h3 className="bg-amber-300  text-xl italic">{item.name}</h3>
        <span className="text-amber-500 w-48 mx-auto">${item.price}</span>
        <span className=" w-48 mx-auto">
          {" "}
          Disponibles: <strong className="text-amber-500">{item.stock}</strong>
        </span>
    <div>
    <button  className="bg-green-300 rounded-xl p-2" ><Link to ={`/detalle/${item.id}`}>Detalle</Link></button>   
    </div>


  

      </div>
   
    </article>
  );
};

export default Item;
