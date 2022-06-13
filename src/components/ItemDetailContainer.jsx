import { useEffect, useState } from "react";
import { getFetch } from "./getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    getFetch(Number(id), setProduct)
      .then((resp) => setProduct(resp))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <section className="">
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;
