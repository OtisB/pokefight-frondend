import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useApi from './useApi';
import PokemonDetail from './PokemonDetail';
import FightAnimation from './FightAnimation';
import './FightingArea.css'

function FightingArea() {

  const [wildPkmApeares, setWildPkmApeares] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [rndId, setRndId] = useState(Math.floor(Math.random() * 150));

  const navigate = useNavigate();
  const { id } = useParams();
  const pokemons = useApi();

  const originalPkm = pokemons.slice(0, 150);
  const currPkm = originalPkm.find(pkm => pkm.id == id);
  const rdmPkm = originalPkm.find(pkm => pkm.id === rndId);

  // useEffect(() => {
  //   console.log('');
  // }, []);

  const startDelay = () => {
    setTimeout(() => {
      console.log(wildPkmApeares);
      setShowAnimation(true);
    }, 5000);
  };

  const handleWildPkmApeares = ((event) => {
    event.preventDefault();
    startDelay();
    if (!wildPkmApeares) {
      setWildPkmApeares(true);
    }
  });

  const checkForResults = () => {
    return showResults ? true : false;
  }

  return (
    <section className='fighting-area-section'>
      <button onClick={() => navigate(`/`)}>Choose an other Pokemon</button>
      {checkForResults() ? (<h2>Results Placeholder</h2>
      ) : (
        <div className="fighting-area-container">
          {currPkm && <PokemonDetail pokemon={currPkm} />}
          {showAnimation && <FightAnimation setShowAnimation={setShowAnimation} />}
          {wildPkmApeares && <PokemonDetail pokemon={rdmPkm} />}
        </div>)}
      <button disabled={wildPkmApeares === true} onClick={handleWildPkmApeares}>Start fight</button>
    </section>
  )
}

export default FightingArea
