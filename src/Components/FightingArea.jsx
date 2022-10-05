import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useApi from './useApi';
import PokemonDetail from './PokemonDetail';
import './FightingArea.css'

function FightingArea() {

  const [fightStartet, setFightStartet] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const pokemons = useApi();

  const originalPkm = pokemons.slice(0, 150);

  const currPkm = originalPkm.find(pkm => pkm.id == id);
  const randomId = Math.floor(Math.random() * originalPkm.length);
  const rdmPkm = originalPkm.find(pkm => pkm.id === randomId);

  const handleFightStartet = ((event) => {
    event.preventDefault();
    setFightStartet(setFightStartet(true));
  });

  return (
    <section className='fighting-area-section'>
      <button onClick={() => navigate(`/`)}>Choose an other Pokemon</button>
      <div className="fighting-area-container">
        {currPkm ? (<PokemonDetail pokemon={currPkm} />) : <h2>Couldn't find your Pokemon!</h2>}
        {(fightStartet && rdmPkm) ?? <PokemonDetail pokemon={rdmPkm} />}
      </div>
      <button onClick={handleFightStartet}>Start fight</button>
    </section>
  )
}

export default FightingArea
