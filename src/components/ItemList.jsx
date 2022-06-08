import React, { useEffect, useState } from "react";
import Item from "./Item";
import { productList } from "../data.js";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  //esta constante guarda una instancia de la clase Promise, en la cual hay un setTimeout con 2 segundos que devuelve mi array de productos
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
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
  }, []); //[] = solo una vez

  return (
    <div className="product-list-container">
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <div key={product.id}>
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
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemList;
