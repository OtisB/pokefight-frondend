import PokemonCard from './PokemonCard';
import "./PokemonContainer.css";


import React from 'react'

function PokemonContainer({ allPokemons }) {


  return (
    <div className="pokemon-list-frame">
      <section className='pokemon-container'>
        {allPokemons.map(pokemon => {
          return (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          )
        })}
      </section>
    </div>
  )
};

export default PokemonContainer;
