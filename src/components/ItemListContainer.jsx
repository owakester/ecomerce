import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cargando from "./Cargando";
import { getFetch } from "./getFetch";
import ItemList from "./ItemList";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
  limit,
} from "firebase/Firestore";
import BgImage from "./Navbar/BgImage";

const ItemListContainer = () => {
  const [product, setProductos] = useState([]);
  const [producto, setProducto] = useState([]); //nuevo
  const [bool, setBool] = useState(true);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "productos");

    if (categoriaId) {
      const queryCollectionFilter = query(
        queryCollection,
        where("categoria", "==", categoriaId)
      );
      getDocs(queryCollectionFilter)
        .then((data) =>
          setProductos(
            data.docs.map((item) => ({ id: item.id, ...item.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollection)
        .then((data) =>
          setProductos(
            data.docs.map((item) => ({ id: item.id, ...item.data() }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  console.log(product);

  return (
    <div>
      {loading ? (
        <Cargando />
      ) : (
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {/*   <BgImage/> */}
          <ItemList product={product} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
