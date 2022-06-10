import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div className="mx-auto  bg-amber-400 m-4 max-w-screen-lg ">
      <div className="grid grid-cols-2">
        <div>
          <img
            className="rounded shadow-md m-4"
            src={product.pictureUrl}
            alt=""
          />
        </div>
        <div className="">
          <div className="m-4">
            <h2 className="font-bold text-3xl text-gray-800	">{product.name}</h2>
            <h3 className="m-2 bg-green-800 rounded-md w-48 mx-auto text center ">
              {product.categoria}
            </h3>
            <h3
              className="font-bold text-xl text-gray
          -500 "
            >
              Precio:${product.price}
            </h3>
            <p className="m-2 text-justify text-lg">
              Descripción:{product.description}
            </p>
            <p className="m-2  text-justify text-lg">
              <strong className="text-2xl">Ingredientes: </strong>
              {product.ingredientes}
            </p>
            <ItemCount />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
