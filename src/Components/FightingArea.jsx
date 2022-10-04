import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useApi from './useApi';
import PokemonDetail from './PokemonDetail';
import './FightingArea.css'

function FightingArea() {

  const [isFighting, setIsFighting] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const pokemons = useApi();

  const currPkm = pokemons.find(pkm => pkm.id == id);
  const randomId = Math.floor(Math.random() * pokemons.length);
  const rdmPkm = pokemons.find(pkm => pkm.id === randomId);

  const handleIsFighting = ((event) => {
    event.preventDefault();
    setIsFighting(setIsFighting(true));
  });

  return (
    <section className='fighting-area-section'>
      <button onClick={() => navigate(`/`)}>Choose an other Pokemon</button>
      <div className="fighting-area-container">
        {currPkm ? (<PokemonDetail pokemon={currPkm} />) : <h2>Couldn't find your Pokemon!</h2>}
        {(isFighting && rdmPkm) ?? <PokemonDetail pokemon={rdmPkm} />}
      </div>
      <button onClick={handleIsFighting}>Start fight</button>
    </section>
  )
}

export default FightingArea
