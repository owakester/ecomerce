import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "./getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

const {id}=useParams()
console.log(parseInt(id))
console.log(typeof (id))

  useEffect(() => {
    getFetch()
      .then((resp) =>setProduct(resp.find((prod) => prod.id === parseInt(id))))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="">
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;
