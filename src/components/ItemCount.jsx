import React from "react";
import { useState } from "react";
import { AnnotationIcon } from "@heroicons/react/solid";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const addProduct = (num) => {
    setContador(parseInt(contador) + num);
  };

  return (
    <div className="pt-2 bg-slate-100  w-56 h-36  mx-auto place-items-center shadow-xl">
      <div className="flex flex-row lex items-center justify-center     ">
        <button
          className="basis-1/4 bg-green-300 rounded shadow-sm mx-2  py-2"
          onClick={() => addProduct(-1)}
          disabled={contador === parseInt(initial) ? true : null}
        >
          -
        </button>
        <span className="basis-1/2">{contador}</span>
        <button
          className="basis-1/4 bg-green-300 rounded shadow-sm mx-2 p-2"
          onClick={() => addProduct(+1)}
          disabled={contador === parseInt(stock) ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="bg-amber-300 rounded shadow my-4 p-2"
        onClick={() => onAdd(contador)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>

      <button>
        <AnnotationIcon className="h-8 w-8 text-amber-300" />
      </button>
    </div>
  );
};

export default ItemCount;
