import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

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
      

    {/*  <p>la cantidad es {count}</p>
     <button onClick={agregar}>boton</button> */}
 
          <Navbar/>  
            

<ItemListContainer

title="hola a todos."
nombre="carlos"


></ItemListContainer>

 
<ItemCount producto="Tablet PC" stock="10" initial="1" />  


    </div> 
  )
} 

export default App
