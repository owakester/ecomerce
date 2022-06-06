import { useState, useEffect } from "react";
import imagen from "../tablet.png";
let state = false;
let msnWarning = "";
ItemCount.defaultProps = {
  stock: 5,
  initial: 1,
  producto: "Lampara Led",
};
function ItemCount(props) {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (contador >= props.stock) {
      state = true;
      msnWarning = "No tenemos mas stock";
    }
  });

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    setContador(contador - 1);
  };

  return (
    <div className="my-8 container">
      <div className="bg-slate-200 rounded-md opacity-90  shadow-xl h-auto w-96  mx-auto">
        <img
          className="rounded m-1 object-contain h-48 w-96 ..."
          src={imagen}
        />
        <h3 className="text-cyan-500 text-xl">{props.producto}</h3>

        <br />

        <div class="flex flex-row  place-items-center  ">
          <div class="basis-2/5">
            <button
              className="bg-green-300 rounded shadow-sm mx-2 p-2"
              onClick={disminuirContador}
            >
              -
            </button>
          </div>
          <div class="basis-1/5">{contador}</div>
          <div class="basis-2/5">
            {" "}
            <button
              disabled={state}
              className="bg-green-300 rounded shadow-sm mx-2 p-2"
              onClick={aumentarContador}
            >
              +
            </button>
          </div>
        </div>

        <h3 className="text-cyan-500">
          {" "}
          El stock son:{" "}
          <span className="text-orange-400 text-lg font-bold">
            {props.stock}
          </span>{" "}
        </h3>
        <div
          className=" text-sm text-red-700 bg-red-100 rounded dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <span className="font-medium">{msnWarning}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;
