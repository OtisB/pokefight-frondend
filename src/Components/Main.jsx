import useApi from './useApi';
import PokemonCard from './PokemonCard';
import "./Main.css";

function Main() {
  const pokemons = useApi();
  const originalPokemons = pokemons.slice(0, 151);

  return (
    <section className='pokemon-container'>
      {originalPokemons.map(pokemon => {
        return (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        )
      })}
    </section>
  )
};

export default Main;
