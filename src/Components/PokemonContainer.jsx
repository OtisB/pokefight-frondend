import PokemonCard from './PokemonCard';
import "./PokemonContainer.css";


import React from 'react'

function PokemonContainer({ allPokemons }) {



  return (
    <section className='pokemon-container'>
      {allPokemons.map(pokemon => {
        return (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        )
      })}
    </section>
  )
}

export default PokemonContainer
