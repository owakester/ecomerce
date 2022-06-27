import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { product } from "./getFetch";
import Item from "./Item";

const ItemList = ({ product }) => {
  const [products, setProducts] = useState([]);

  //esta constante guarda una instancia de la clase Promise, en la cual hay un setTimeout con 2 segundos que devuelve mi array de productos
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(product);
    }, 2000);
  });

  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert("No se pueden ver ahora los productos");
    }
  };

 


  useEffect(() => {



    
    getProductsFromDB();
  }, [getProductsFromDB]); //[] = solo una vez

  return (

   
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4   ">
       
          
            {products.map((product) => {
              return (
                <div className="" key={product.id}>
                  <Item
                    name={product.name}
                    pictureUrl={product.pictureUrl}
                    price={product.price}
                    stock={product.stock}
                    id={product.id}
                  />
                </div>
              );
            })}
         
        
      </div>
    </div>
  );
};

export default ItemList;
