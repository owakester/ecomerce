import { useEffect, useState } from "react";
import { getFetch } from "./getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    getFetch(Number(3), setProduct)
      .then((resp) => setProduct(resp))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="">
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;
