import React from 'react';
import { useState } from 'react';
import Logo from "../tablet.png";

const ItemCount = ({ initial, stock, onAdd,producto }) => {
 
  const [contador, setContador] = useState(initial);

  const addProduct = (num) => {
    setContador(parseInt (contador) + num);
    
  };

  onAdd = (contador) => {
    alert(`Has agregado ${contador} ${producto}`);
  };


  return (
    <div className="container ">
      <div className='mt-12 bg-slate-100 h-auto w-48  mx-auto place-items-center shadow-xl'>
        <p>{producto}</p>
       <img className='mx-auto ' src={Logo}  alt=""height={180} width={180} />
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
      </div>
    </div>
  );
};

export default ItemCount;
