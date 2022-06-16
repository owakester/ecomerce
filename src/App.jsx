import { useState, useEffect } from "react";
import { BrowserRouter as Rutas, Routes, Route,Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NoPage from "./components/NoPage";
import BgImage from "./components/Navbar/BgImage";
import BgFooter from "./components/BgFooter";

function App() {
 

  return (
   <div className="bg-gradient-to-r from-slate-700 to-slate-800  App"> 
      

      <Rutas>
        <Navbar/>
        <BgImage/>
        <br />
      <Routes>
        <Route index path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/car" element={<CartWidget />} />
{/*           <Route path="*" element={<NoPage />} />
 */}          <Route path='*' element={<Navigate to='/' />} />
      </Routes>

      <BgFooter/>
    </Rutas>



      
    

  </div> 
  );
}

export default App;
