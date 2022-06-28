import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cargando from "./Cargando";
import { getFetch } from "./getFetch";
import ItemList from "./ItemList";
import {getFirestore} from '../firebase/firestore'

const ItemListContainer = () => {
    const [product, setProductos] = useState([])
    const [producto, setProducto] = useState([]) //nuevo

    const [loading, setLoading] = useState(true) 
    
    const { categoriaId } = useParams()

useEffect(() => {

    const db = getFirestore()
    const queryCollection= collection ('productos')
}, [bool])





 /*    console.log(categoriaId) */
   
/*     useEffect(()=>{
        if (categoriaId) {
            getFetch()// llamada a la api
            .then((resp)=> {
                    setProductos(resp.filter(producto => producto.categoria === categoriaId ))
                    setLoading(false)
            })
            .catch(err => console.log(err))           
        } else {
            getFetch()// llamada a la api
            .then( (resp)=> setProductos(resp) )
            .catch(err => console.log(err)) 
            .finally(()=> setLoading(false))           
        } 
        
    
    }, [categoriaId]) */

   
   
    return (
        <div>
            { loading ? 
                <Cargando/>     
            :   
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                      <ItemList product={product} />                   
                </div>             
            }
        </div>
    )
}

export default ItemListContainer

