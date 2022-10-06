import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useApi from './useApi';
import PokemonDetail from './PokemonDetail';
import './FightingArea.css'

function FightingArea() {

  const [wildPkmApeares, setWildPkmApeares] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [rndId, setRndId] = useState(Math.floor(Math.random() * 150));
  const [winningPkm, setWinningPkm] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const pokemons = useApi();

  const originalPkm = pokemons.slice(0, 150);
  const currPkm = originalPkm.find(pkm => pkm.id == id);
  const rdmPkm = originalPkm.find(pkm => pkm.id === rndId);

  const fight = (attackingPkm, defendingPkm) => {
    let count = 10;
    let attackingPkmHp = attackingPkm.base.HP;
    let defendingPkmHp = defendingPkm.base.HP;

    do {
      count = count - 1;

      defendingPkmHp = defendingPkmHp - calculateDamage(attackingPkm.base.Attack, defendingPkm.base.Defense);
      attackingPkmHp = attackingPkmHp - calculateDamage(defendingPkm.base.Attack, attackingPkm.base.Defense);

    } while (count > 0);

    console.log(`${attackingPkm.name.english}`, attackingPkmHp);
    console.log(`${defendingPkm.name.english}`, defendingPkmHp);

    if (attackingPkmHp > defendingPkmHp) {
      setWinningPkm(attackingPkm);
    } else {
      setWinningPkm(defendingPkm);
    }

  };

  const calculateDamage = (attack, defense) => {
    let damage = attack - defense;
    if (damage < 0) {
      return 0;
    }
    return damage;
  };

  const determineWinner = () => {
    if (currPkm.base.Speed > rdmPkm.base.Speed) {
      fight(currPkm, rdmPkm);
    } else {
      fight(rdmPkm, currPkm);
    }
  };

  const animationDelay = () => {
    setTimeout(() => {
      setShowAnimation(true);
      fightDelay();
    }, 3000);
  };

  const fightDelay = () => {
    setTimeout(() => {
      determineWinner();
    }, 5000);
  };

  const handleWildPkmApeares = ((event) => {
    event.preventDefault();
    animationDelay();
    if (!wildPkmApeares) {
      setWildPkmApeares(true);
    }
  });

  const checkForResults = () => {
    return winningPkm ? true : false;
  }

  return (
    <section className='fighting-area-section'>
      <button onClick={() => navigate(`/`)}>Choose an other Pokemon</button>
      {checkForResults() ? (<PokemonDetail pokemon={winningPkm} />
      ) : (
        <div className="fighting-area-container">
          {currPkm && <PokemonDetail pokemon={currPkm} />}
          {showAnimation && <h2>Animation Placeholder</h2>}
          {wildPkmApeares && <PokemonDetail pokemon={rdmPkm} />}
        </div>)}
      <button disabled={wildPkmApeares === true} onClick={handleWildPkmApeares}>Start fight</button>
    </section>
  )
}

export default FightingArea;
