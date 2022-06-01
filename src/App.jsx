import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/header/Header'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'

function App() {
  /* const [count,modificarCount] =useState(1)

 
function agregar(){
modificarCount(count + 1)


}

useEffect(()=>{
  console.log("Llamada a una api1")

})


useEffect(()=>{
  console.log("Llamada a una api2")

})

useEffect(()=>{
  console.log("renderizado de app3")

},[])
 */
  return (
    <div className="App">
      <Header/>
    {/*  <p>la cantidad es {count}</p>
     <button onClick={agregar}>boton</button> */}
  
          <Navbar/>  
          <ItemListContainer/>
    </div> 
  )
} 

export default App
