import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "./getFetch";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [product, setProductos] = useState([])
    const [loading, setLoading] = useState(true) 
    
    const { categoriaId } = useParams()

 /*    console.log(categoriaId) */
   
    useEffect(()=>{
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
        
        // .finally(()=> )
    }, [categoriaId])

   
   
    return (
        <div>
            { loading ? 
                <h1>Cargando...</h1>            
            :   
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                      <ItemList product={product} />                   
                </div>             
            }
        </div>
    )
}

export default ItemListContainer

