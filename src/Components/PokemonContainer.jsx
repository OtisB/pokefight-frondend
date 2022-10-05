import PokemonCard from './PokemonCard';
import "./PokemonContainer.css";


import React from 'react'

function PokemonContainer({ allPokemons }) {
  let myInterval = null;
  const ScrollAround = (pixel) => {
    document.getElementById('scrollFrame').scrollLeft += pixel;
  }
  const ScrollInterval =  (pixel) => {
    myInterval = setInterval(() => { ScrollAround(pixel) }, 100);
  }
  const rmvScrollInterval =  () => {
    clearInterval(myInterval);
    console.log(myInterval);
  }
  return (
    <div className="pokemon-list-outer">
    <div className="pokemon-list-frame" id="scrollFrame">
    <section className='pokemon-container'>
      {allPokemons.map(pokemon => {
        return (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        )
      })}
    </section>
    </div>
    <button onMouseOver={(e) => ScrollInterval(-256)} onMouseOut={(e) => rmvScrollInterval()} id="leftButton">&larr;</button>
    <button onMouseOver={(e) => ScrollInterval(256)} onMouseOut={(e) => rmvScrollInterval()} id="rightButton">&rarr;</button>
    </div>
  )
};

export default PokemonContainer;
