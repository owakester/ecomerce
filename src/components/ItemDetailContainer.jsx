import { useEffect, useState } from "react";
import { getFetch } from "./getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    getFetch()
      .then((resp) => setProduct(resp))
      .catch((err) => console.log(err));
  }, []);
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
