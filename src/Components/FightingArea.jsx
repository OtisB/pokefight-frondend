import { useParams, useNavigate } from 'react-router-dom';
import useApi from './useApi';
import PokemonDetail from './PokemonDetail';
import './FightingArea.css'

function FightingArea() {

  const navigate = useNavigate();
  const { id } = useParams();
  const pokemons = useApi();

  const currPkm = pokemons.find(pkm => pkm.id == id);
  const randomId = Math.floor(Math.random() * pokemons.length);
  const rdmPkm = pokemons.find(pkm => pkm.id === randomId);

  return (
    <section className='fighting-area-section'>
      <div className="fighting-area-container">
        <button onClick={() => navigate(`/`)}>Choose an other Pokemon</button>
        {currPkm ? (<PokemonDetail pokemon={currPkm} />) : <h2>Couldn't find your Pokemon!</h2>}
      </div>
    </section>
  )
}

export default FightingArea
