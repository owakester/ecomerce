import { NavLink } from "react-router-dom";
import bg from "../Navbar/bgburguer.jpg";
import { Animated } from "react-animated-css";
import React, { useState } from "react";
import Cart from "../Cart/Cart";

function BgImage(categoriaId) {
  const [mostrar, setMostrar] = useState(true);

  console.log(mostrar);

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
              onClick={() => setMostrar(!mostrar)}
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
  {/*     <div className="container mx-auto">
        <div class="grid grid-cols-4 gap-4">
          <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="px-12">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Tan grande que se sale de la bolsa{" "}
                </h5>
              </a>
              <img
                className=" mx-auto rounded pb-2"
                src="https://i.pinimg.com/564x/5f/75/50/5f75502b7d938ad56191a8b4f5a42000.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            {" "}
            <div className=" bg-neutral-700 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  pb-4 mx-auto ">
              <h5 className="mb-2  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Promo clasica Burguer
              </h5>

              <Animated
                animationIn="fadeInLeft"
                animationOut="zoomOutUp"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={mostrar}
              >
                <img
                  className="mx-auto "
                  src="https://i.ibb.co/w4K56Rf/pan.png"
                  alt="pan"
                  border="0"
                />
              </Animated>

              <Animated
                animationIn="fadeInDownBig"
                animationOut="zoomOutUp"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={mostrar}
              >
                <img
                  className="mx-auto w-3/4 "
                  src="https://i.ibb.co/GCGSb1H/lechuga.png"
                  alt="lechuga"
                  border="0"
                />
              </Animated>

              <Animated
                animationIn="fadeInRight"
                animationOut="zoomOutDown"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={mostrar}
              >
                <img
                  className="mx-auto  w-3/4"
                  src="https://i.ibb.co/KykXpkR/carne.png"
                  alt="carne"
                  border="0"
                />
              </Animated>

              <Animated
                animationIn="lightSpeedIn"
                animationOut="zoomOutDown"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={mostrar}
              >
                <img
                  className="mx-auto w-3/4"
                  src="https://i.ibb.co/q0MxXKq/pandown.png"
                  alt="pandown"
                  border="0"
                />
              </Animated>
            </div>
          </div>

          <div>
            {" "}
            <div className=" px-12 pb-12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#"></a>
              <div className="">
                <a href="#">
                  {
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Arma tu combo
                    </h5>
                  }{" "}
                </a>
                <img
                  className="rounded-t-lg "
                  src="https://i.pinimg.com/564x/fe/67/3b/fe673b91abe0648b06df019962cb0edd.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <Cart />
          </div>
        </div>
      </div> */}
    </header>
  );
}

export default BgImage;
