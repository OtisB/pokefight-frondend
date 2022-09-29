import useApi from './useApi';
import PokemonDetail from './PokemonDetail';
import "./Main.css";

function Main() {
  const pokemons = useApi();

  return (
    <section className='pokemon-container'>
      {pokemons.map(pokemon => {
        return (
          <PokemonDetail pokemon={pokemon} key={pokemon.id} />
        )
      })}
    </section>
  )
};

export default Main;
