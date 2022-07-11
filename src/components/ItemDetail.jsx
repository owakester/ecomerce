import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";
import { useCartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [estado, setEstado] = useState(null);

  const { cart, addToCart } = useCartContext();
  /// estado
  const onAdd = (contador) => {
    setEstado(contador);
    addToCart({ ...item, cantidad: contador });
  };

  return (
    <div className="mx-auto   bg-amber-400 m-4 max-w-screen-lg ">
      <div className="grid grid-cols-2">
        <div>
          <img className="rounded shadow-md m-4" src={item.pictureUrl} alt="" />
        </div>
        <div className="">
          <div className="m-4">
            <h2 className="font-bold text-3xl text-gray-800	">{item.name}</h2>
            <h3 className="m-2 bg-green-800 rounded-md w-48 mx-auto text center ">
              {item.categoria}
            </h3>
            <h3
              className="font-bold text-xl text-gray
          -500 "
            >
              Precio:${item.price}
            </h3>
            <div className="static ...">
              <div className=" absolute top-0 right-0 ...">
                <Cart />
              </div>
            </div>

            <p className="m-2 text-justify text-lg">
              Descripción:{item.description}
            </p>
            <p className="m-2  text-justify text-lg">
              <strong className="text-2xl">Ingredientes: </strong>
              {item.ingredientes}
            </p>
            {estado ? (
              <Link to="/car">
                <button className="bg-green-500 rounded-md p-2 ">
                  Ir a carrito
                </button>

                <Link to="/">
                  <button className="bg-green-500 rounded-md p-2 mx-2">
                    Comprar +
                  </button>
                </Link>
              </Link>
            ) : (
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
