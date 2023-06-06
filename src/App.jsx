//components
import { Button } from "./components/Button"
import { Card } from "./components/Card";
//Styles
import './sass/App.scss'
// Icons
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
//Hooks
import { useState, useEffect } from "react";

const App = ()=>{

  const [pokemonId, setPokemonId]= useState(60);
  const [pokemonEvolutions, setPokemonEvolutions] = useState([])

  useEffect(()=>{
    getEvolution(pokemonId); 
     }, [pokemonId])
  async function getEvolution(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
   // console.log(response)
    const data = await response.json()

   let pokemonEvoArray = []

   let pokemonLv1 = data.chain.species.name
   let pokemonLv1Img = await getPokemonImg(pokemonLv1)
   pokemonEvoArray.push([pokemonLv1, pokemonLv1Img])

   if(data.chain.evolves_to.length !== 0){
   let pokemonLv2 = data.chain.evolves_to[0].species.name;
   let pokemonLv2Img = await getPokemonImg(pokemonLv2)
   pokemonEvoArray.push([pokemonLv2, pokemonLv2Img])
   //console.log(pokemonEvoArray)

   if(data.chain.evolves_to[0].evolves_to.length !==0){
    let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
   let pokemonLv3Img = await getPokemonImg(pokemonLv3)
   pokemonEvoArray.push([pokemonLv3, pokemonLv3Img])
   
  // console.log(pokemonEvoArray)
   }
   }
   setPokemonEvolutions(pokemonEvoArray)
  }

  async function getPokemonImg(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await response.json()
    return data.sprites.other['official-artwork'].front_default
  }
  
  function prevClick() {
      (pokemonId === 1)?
      setPokemonId(1):
      setPokemonId(pokemonId -1)    
      }

  function nextClick(){
    setPokemonId(pokemonId + 1)
 
  }
 
    return(
    <div className="app">

    <div className={`card-container card${pokemonEvolutions.length}`}>
      {pokemonEvolutions.map(pokemon => 
      <Card 
      key={pokemon[0]}
      name={pokemon[0]}
      img={pokemon[1]}
      />
      )}
     
    </div>
   <div className="buttons-container">
     <Button 
     icon={<TiArrowLeftOutline/>}
     handleClick={prevClick} 
     />
    

     <Button 
     icon={<TiArrowRightOutline/>}
     handleClick={nextClick} 
     />
    
    </div>

   </div> )
}

export{App}