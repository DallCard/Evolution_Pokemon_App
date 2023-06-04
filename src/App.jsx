import { Button } from "./components/Button"
import './sass/App.scss'

const App = ()=>{
    return(
   <>

   { /*tarjetas*/ }
   <div className="buttons-container">
     <Button text='Anterior' />
     <Button text='Siguiente'/>
    
    </div>

   </> )
}

export{App}