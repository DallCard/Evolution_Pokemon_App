import { Button } from "./components/Button"
import './sass/App.scss'
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import { useState } from "react";


const App = ()=>{

  const [pokemonId, setPokemonId]= useState(1)
  
  
    return(
    <>

   { /*tarjetas*/ }
   <div className="buttons-container">
     <Button 
     icon={<TiArrowLeftOutline/>}
     handleClick={()=>{console.log('anterior')}} 
     />

     <Button 
     icon={<TiArrowRightOutline/>}
     handleClick={()=>{console.log('siguiente')}} 
     />
    
    </div>

   </> )
}

export{App}