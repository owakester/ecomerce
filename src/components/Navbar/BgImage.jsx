import { NavLink } from "react-router-dom";
import bg from "../Navbar/bgburguer.jpg"

function BgImage(categoriaId) {
    
console.log(categoriaId)
    return(
<header >
    <img src={bg} alt="" height={800}/>

  <div className="m-4">
    <NavLink to="/categoria/hamburguesas"><button className="bg-amber-300 hover:bg-green-600 rounded-xl p-1 m-1">hamburguesas</button> </NavLink>
    <NavLink to="/categoria/bebidas"><button className="bg-gray-300  hover:bg-green-600  rounded-xl p-1 m-1">Bebidas</button></NavLink>
    <NavLink to="/categoria/ensaladas"><button className="bg-green-300  hover:bg-green-600  rounded-xl p-1 m-1">Ensaladas</button></NavLink>
    </div>

</header>




    )
}

export default BgImage;