import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-700 to-slate-800  App">
      <Navbar />

      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
