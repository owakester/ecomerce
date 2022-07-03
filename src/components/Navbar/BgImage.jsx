import { NavLink } from "react-router-dom";
import bg from "../Navbar/bgburguer.jpg";
import { Animated } from "react-animated-css";
import React, { useState } from "react";
import Cart from "../Cart/Cart";

function BgImage(categoriaId) {
  const [mostrar, setMostrar] = useState(true);


  return (
    <header>
      <img src={bg} alt="" height={800} />

      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={mostrar}
      >
        <div className="m-4">
          <NavLink to="/categoria/hamburguesas">
            <button
            
              className="bg-amber-300 hover:bg-green-600 rounded-xl p-1 m-1"
            >
              {" "}
              <strong className="text-3xl ">🍔</strong> hamburguesas{" "}
            </button>{" "}
          </NavLink>
          <NavLink to="/categoria/bebidas">
            <button className="bg-gray-300  hover:bg-green-600  rounded-xl p-1 m-1">
              <strong className="text-3xl ">🧋</strong>Bebidas
            </button>
          </NavLink>
          <NavLink to="/categoria/ensaladas">
            <button className="bg-green-300  hover:bg-green-600  rounded-xl p-1 m-1">
              {" "}
              <strong className="text-3xl ">🥗</strong>Ensaladas
            </button>
          </NavLink>


          
   
      


        </div>
      </Animated>

      <div className="bg-yellow-300 mb-2  mx-auto text-xl  ">
        Disfruta de las mejores hamburguesas de la ciudad
      </div>
 
    </header>
  );
}

export default BgImage;
