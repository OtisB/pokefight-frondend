import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useApi from './useApi';
import PokemonDetail from './PokemonDetail';
import './FightingArea.css'

function FightingArea() {

  const [wildPkmApeares, setWildPkmApeares] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const pokemons = useApi();

  const originalPkm = pokemons.slice(0, 150);
  const currPkm = originalPkm.find(pkm => pkm.id == id);
  const randomId = Math.floor(Math.random() * originalPkm.length);
  const rdmPkm = originalPkm.find(pkm => pkm.id === randomId);

  useEffect(() => {
    console.log('');
  }, [showPlaceholder]);

  const startDelay = () => {
    setTimeout(() => {
      console.log('Delaying');
      setShowPlaceholder(setShowPlaceholder(true));
    }, 5000);
  };

  const handleWildPkmApeares = ((event) => {
    event.preventDefault();
    startDelay();
    setWildPkmApeares(setWildPkmApeares(true));  //But why? setWildPkmApeares(setWildPkmApeares(true)); and not setWildPkmApeares(true);
  });

  return (
    <section className='fighting-area-section'>
      <button onClick={() => navigate(`/`)}>Choose an other Pokemon</button>
      <div className="fighting-area-container">
        {currPkm ? (<PokemonDetail pokemon={currPkm} />) : <h2>Couldn't find your Pokemon!</h2>}
        {showPlaceholder ?? <h2>Animation Placeholder</h2>}
        {wildPkmApeares ?? <PokemonDetail pokemon={rdmPkm} />}
      </div>
      <button disabled={wildPkmApeares === true} onClick={handleWildPkmApeares}>Start fight</button>
    </section>
  )
}

export default FightingArea
