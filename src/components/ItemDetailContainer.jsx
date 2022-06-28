import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cargando from "./Cargando";
import { getFetch } from "./getFetch";
import ItemDetail from "./ItemDetail";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/Firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [bool, setBool] = useState(true);

  const { id } = useParams();

  /*    useEffect(() => {
    getFetch()
      .then((resp) =>setProduct(resp.find((prod) => prod.id === parseInt(id))))
      .catch((err) => console.log(err))
      .finally(()=> setLoading(false))
  }, [id]);  */

  useEffect(() => {
    const db = getFirestore();
    const queryItem = doc(db, "productos", id);
    getDoc(queryItem) // promesa
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  console.log(product);

  return (
    <div>
      {loading ? (
        <Cargando />
      ) : (
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <ItemDetail item={product} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
