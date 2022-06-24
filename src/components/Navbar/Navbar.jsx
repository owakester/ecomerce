import React from "react";
import { NavLink, useParams } from "react-router-dom";
import CartWidget from "../CartWidget";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center"></div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                 
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                 <NavLink to="/">Inicio</NavLink>
                </a>

              

                <a
                
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <NavLink to="/">Productos</NavLink>
                </a>

                <a
               
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contactenos
                </a>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
           
              <div>
                <NavLink to="car">
                
                  <CartWidget />
                </NavLink>
              </div>
            </button>

            <div className="ml-3 relative">
              
         
            </div>
          </div>
        </div>
      </div>

  
    </nav>
  );
}

export default Navbar;
  