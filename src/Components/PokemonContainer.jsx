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
        <div className='upper-row-container'>
          {upperRow.map(pokemon => {
            return (
              <PokemonCard pokemon={pokemon} key={pokemon.id} />
            )
          })}
        </div>
        <div className='bottom-row-container'>
          {bottomRow.map(pokemon => {
            return (
              <PokemonCard pokemon={pokemon} key={pokemon.id} />
            )
          })}
        </div>

      </section>
    </div>
  )
};

export default PokemonContainer
