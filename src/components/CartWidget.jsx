import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../carshop.svg";
import { CartContext } from "./CartContext";


function CartWidget() {

  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

console.log(cart)


  return (
    
    
    
    <div className=" rounded-full p-1 bg-cyan-300 opacity-90">
      <img className="m-1 " src={Logo} height={30} width={30} />
      <div className="">{cart.length}</div>
    </div>
  );
}

export default CartWidget;
