import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({ name, pictureUrl, price, id, stock }) => {
  const onAdd = (contador) => {
    alert(`Sumaste a tu pedido ${contador}  ${name}🍔`);
  };

  return (
    <article className="product-card mb-8 ">
      <img className="rounded-t w-56 h-48 mx-auto " src={pictureUrl} alt="" />

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />

      <div className="bg-gray-200 w-56 mx-auto rounded-b-lg">
        <h3 className="bg-amber-300  text-xl italic">{name}</h3>
        <span className="text-amber-500 w-48 mx-auto">${price}</span>
        <span className=" w-48 mx-auto">
          {" "}
          Disponibles: <strong className="text-amber-500">{stock}</strong>
        </span>


    <button ><Link to ={`/detalle/${id}`}><svg  xmlns="http://www.w3.org/2000/svg" className="h-8 w-8s" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
</svg></Link></button>   

      </div>
   
    </article>
  );
};

export default Item;
