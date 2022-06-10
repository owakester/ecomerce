import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
 

  return (
    <div className="bg-gradient-to-r from-slate-700 to-slate-800  App">
      
      
      
      <Navbar />

      <ItemListContainer/>
      <ItemDetailContainer/>

    </div>
  );
}

export default App;
