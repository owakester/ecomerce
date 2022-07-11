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
} from "firebase/firestore";

import { useState } from "react";
import Cargando from "../Cargando";
import DatosCompra from "../datosCompra";
import { useEffect } from "react";

const Cart = () => {
  const { cart, vaciarCarrito, removeItem, totalPrecio } = useCartContext();
  const [guardar, setGuardar] = useState([]);
  const [show, setShow] = useState(true);
  const [nombre, setNombre] = useState("");
  const [total, setTotal] = useState();

  async function generarOrden(e) {
    let orden = {};

    orden = {
      name: "carlos Bohorquez",
      phone: "1112545345",
      email: "alejo15084@gmail.com",
    };
    console.log(orden.name);

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

    setNombre({ nombre: orden.name, email: orden.email });
    setTotal(orden.total);

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
          <div className=" flex h-full flex-col mx-2 rounded  bg-white shadow-xl snap-x snap-mandatory ...">
            <br />
            <hr />
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
                            <p className="ml-4 text-green-700">
                              $ {item.price}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Cant No: {item.cantidad}
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

                          <p className="">$ {item.price * item.cantidad}</p>

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
          </div>
        ))}
      </ul>

      <div>
        <br />

        <>
          <button
            className="bg-green-300 rounded p-2 m-2 "
            disabled={cart.length === 0}
            type="button"
            onClick={() => {
              setShow(!show);
            }}
          >
            🧾 Recibo de compra{" "}
            {show ? (
              <button
                className="text-base font-medium text-md text-white rounded p-2 bg-green-500"
                onClick={generarOrden}
                disabled={cart.length === 0}
              >
                Terminar compra
              </button>
            ) : (
              "-"
            )}
          </button>

          {show ? (
            <div>
              <p className="text-gray-100">Gracias por su compra</p>
            </div>
          ) : (
            <div
              className="bg-gray-300 mb-8 justify-center rounded shadow-sm mx-8 justify-items-center  	"
              style={{ color: "blue" }}
            >
              <form className=" p-4" action="">
                <div className="mb-6">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="nombre"
                  >
                    Nombre
                  </label>

                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={nombre.nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    htmlFor="nombre"
                  >
                    Correo
                  </label>

                  <input
                    type="email"
                    id="correo"
                    name="email"
                    value={nombre.email}
                    onChange={(e) => setNombre(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>

                <p className="bg-gray-200 rounded p-4 m-2">
                  {" "}
                  Su codigo de compra es: {guardar}
                </p>
              </form>

              <p>Total a pagar: ${total}</p>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Cart;
