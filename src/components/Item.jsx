import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ name, pictureUrl, price, id, stock }) => {
  const onAdd = (contador) => {
    alert(`Sumaste a tu pedido ${contador}  ${name}🍔`);
  };

  return (
    <article className="product-card mb-8 ">
      <img className="rounded w-56 h-48 mx-auto " src={pictureUrl} alt="" />

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />

      <div className="bg-gray-200 w-56 mx-auto rounded-b-lg">
        <h3 className="bg-amber-300  text-xl italic">{name}</h3>
        <span className="text-amber-500 w-48 mx-auto">${price}</span>
        <span className=" w-48 mx-auto">
          {" "}
          Disponibles: <strong className="text-amber-500">{stock}</strong>
        </span>
      </div>
    </article>
  );
};

export default Item;
