import React from "react";
import App from "../../App";
import { CartContext, useCartContext } from "../CartContext";
import { LinkContainer } from 'react'
import { NavLink } from "react-router-dom";
import ItemList from "../ItemList";
import ItemListContainer from "../ItemListContainer";
import CartWidget from "../CartWidget";


const Cart = () => {
  const { cart, vaciarCarrito , removeItem } = useCartContext();

 
  
  return (
   
        
        
        

<div className="pt-20 pointer-events-auto w-screen max-w-md  scroll-smooth hover:scroll-auto ">
<ul>
        {cart.map((item) => (
          <div className="flex h-full flex-col  bg-white shadow-xl snap-x snap-mandatory ...">
            <div className=" flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Carrito </h2>
                <div className="ml-3 flex h-7 items-center">
                  <button type="button"onClick={()=>removeItem(item.id)} className="-m-2 p-2 text-red-400 hover:text-gray-500">
                    <span className="sr-only">Close panel</span>
                
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    <li className="flex py-6"  key={item.id}>
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={item.pictureUrl} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center"/>
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">  {item.name} </a>
                            </h3>
                            <p className="ml-4">{item.price}</p>
                          </div>
                         
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Cantidad: {item.cantidad}</p>
                          <p className="text-gray-500">Stock: {item.stock}</p>

                     <hr />
                          <h2 className={(item.stock===item.cantidad)? "rounded  p-1 bg-red-600":" rounded  p-1  bg-green-500"}>Stock</h2>
                        
                        
                          <div className="flex">
                          
                          
                         
                            <button type="button" onClick={()=>removeItem(item.id)}className="font-medium  text-green-600 hover:text-indigo-500">Eliminar</button>
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
               Total:  ${item.cantidad * item.price}
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-green-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-400">Comprar</a>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
             {/*    <p>
                  or <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                </p> */}
              </div>
            </div>


          </div>
      




        
        


        ))}
        
        <div>


          
       

       



      </div>
      </ul>


     
    </div>
  );
};

export default Cart;
