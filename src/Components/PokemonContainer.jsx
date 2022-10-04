import PokemonCard from './PokemonCard';
import "./PokemonContainer.css";


import React from 'react'

function PokemonContainer({ allPokemons }) {

  const half = Math.ceil(allPokemons.length / 2);

  const upperRow = allPokemons.slice(0, half)
  const bottomRow = allPokemons.slice(half)

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

export default PokemonContainer
