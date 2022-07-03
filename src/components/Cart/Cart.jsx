/* import { getFirestore, collection, addDoc } from "firebase/firestore"; */

import React from "react";

import { CartContext, useCartContext } from "../CartContext";

import {
  collection,
  addDoc,
  getDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
  updateDoc,
  documentId,
  writeBatch,
} from "firebase/Firestore";
import { useState } from "react";
import Cargando from "../Cargando";
import DatosCompra from "../datosCompra";

const Cart = () => {
  const { cart, vaciarCarrito, removeItem, totalPrecio } =
    useCartContext();
  const [guardar, setGuardar] = useState([]);
  const [show, setShow] = useState(true);

  async function generarOrden(e) {
    let orden = {};

    orden = {
      name: "Carlos Bohorquez",
      phone: "1112545345",
      email: "alejo15084@gmail.com",
    };

    e.preventDefault();
    /*  orden = {}; */

    orden.total = totalPrecio();

    //Generar una orden
    orden.items = cart.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.name;
      const precio = cartItem.price * cartItem.cantidad;

      return { id, nombre, precio };
    });

    //insertar stock
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, orden).then((resp) => setGuardar(resp.id)); //id orden insertada

    const querycollectionStock = collection(db, "productos");

    //Actualizar stock (no es obligatorio)
    const queryActualizarStock = await query(
      querycollectionStock,
      where(
        documentId(),
        "in",
        cart.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryActualizarStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cart.find((item) => item.id === res.id).cantidad,
          })
        )
      )
      .finally(() => vaciarCarrito());
    batch.commit();
  }

  return (
    <div className="  max-w-md   overflow-y-auto h-96  scroll-smooth hover:scroll-auto ">
      <br />
      <br />
      <br />
      <ul>
        {cart.map((item) => (
          <div className=" flex h-full flex-col  bg-white shadow-xl snap-x snap-mandatory ...">
            <div className=" flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2
                  className="text-lg font-medium text-gray-900"
                  id="slide-over-title"
                >
                  Carrito{" "}
                </h2>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="-m-2 p-2 text-red-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Close panel</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    <li className="flex py-6" key={item.id}>
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.pictureUrl}
                          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#"> {item.name} </a>
                            </h3>
                            <p className="ml-4">{item.price}</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Cantidad: {item.cantidad}
                          </p>
                          <p className="text-gray-500 mx-1 ">
                            Stock: {item.stock}
                          </p>

                          <hr />
                          <h2
                            className={
                              item.stock === item.cantidad
                                ? "rounded  p-1 bg-red-600"
                                : " rounded  p-1  bg-green-500"
                            }
                          >
                            Stock
                          </h2>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className=" mx-2 font-medium  text-green-600 hover:text-indigo-500"
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                {/*  Total: ${item.cantidad * item.price} */}
                <p>Total: ${totalPrecio()}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Impuestos y envios calculados en el checkout
              </p>

              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                {/*    <p>
                  or <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                </p> */}
              </div>
            </div>
          </div>
        ))}

        <div></div>
      </ul>

{/*       <h2>Datos del Comprador</h2> */}

     

      <div>
        <button
          className="text-base font-medium text-md text-white rounded p-2 bg-green-500"
          onClick={generarOrden}
        >
          Terminar compra
        </button>
        <br />
        <p className="bg-gray-200 rounded p-4 m-2">   Su codigo de compra es: {guardar}</p>
     
        {/*    <>
      <button




        type="button"
        onClick={() => {
          setShow(!show)
        
        }}
      >
        Mostrar {show ? 'Div 2' : 'Div 1'}
      </button>

      {show ? (
        <div >





        </div>



      ) : (
        <div style={{ color: 'blue' }}>Div 2</div>
      )}
    </> */}
      </div>
    </div>
  );
};

export default Cart;
