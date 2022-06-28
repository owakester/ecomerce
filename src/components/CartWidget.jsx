import { NavLink } from "react-router-dom";
import Logo from "../carshop.svg";
import { CartContext, useCartContext } from "./CartContext";


function CartWidget() {

  const { cart,iconCart,vaciarCarrito } = useCartContext();

  return (
    <div className=" rounded-full p-1">


      


      {
        cart.length === 0 ? 
        <div className=" d-flex justify-content-center flex-column align-items-center mt-5">
         
          <p className="text-center">Oops carrito  Vacío</p>
          
          <NavLink to="/"><button className="bg-green-400 rounded">Ir al Inicio</button></NavLink>



        </div> :

           <div className="mt-4">
         {/*   <h1 className='text-center'>Carrito de Compras</h1> */}
         <img className=" " src={Logo} height={30} width={30} />
   
<button className="rounded-full bg-gray-100 p-1 text-xs font-bold text-amber-400 ">{iconCart()}</button>
<button className="bg-amber-400 rounded p-1 text-white m-2" onClick={vaciarCarrito}>
          Vaciar
        </button>
      
          </div>
      }





     
    </div>
  );
}

export default CartWidget;
