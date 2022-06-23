import React from 'react';

import { useState } from 'react';


const ItemCount = ({ initial, stock, onAdd }) => {
  //hook de estado
  const [contador, setContador] = useState(initial);
  const [showButton, setshowButton] = useState(false);


  const addProduct = (num) => {
    setContador(contador + num);
  };


  const agregar = () => {
    onAdd(contador)
}


  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={contador === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{contador}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={contador === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
      onClick={agregar}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    {/*   {showButton && history.location.pathname.includes('/detail') && (
        <button
          onClick={() => {
            history.push('/cart');
          }}
          className="button-primary button-finalizar-compra"
        >
          Finalizar compra
        </button>
      )} */}
    </div>
  );
};

export default ItemCount;
