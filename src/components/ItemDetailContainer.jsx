import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cargando from "./Cargando";
import { getFetch } from "./getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product  , setProduct] = useState({});
  const [loading, setLoading] = useState(true);

const {id}=useParams()


  useEffect(() => {
    getFetch()
      .then((resp) =>setProduct(resp.find((prod) => prod.id === parseInt(id))))
      .catch((err) => console.log(err))
      .finally(()=> setLoading(false))
  }, [id]);
  return (
    <div>
            { loading ? 
             <Cargando/>
            :   
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                      <ItemDetail item={product} />                   
                </div>             
            }
        </div>
  );
};

export default ItemDetailContainer;
