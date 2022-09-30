import useApi from './useApi';
import PokemonContainer from './PokemonContainer'

import "./Main.css";

function Main() {
  const pokemons = useApi();
  const originalPokemons = pokemons.slice(0, 150);

  return (
    <PokemonContainer allPokemons={originalPokemons} />
  )
};

export default Main;
