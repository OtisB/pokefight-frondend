import { useParams, useNavigate } from 'react-router-dom';
import useApi from './useApi';
import './PokemonDetail.css';

function PokemonDetail() {

  const navigate = useNavigate();
  const { id } = useParams();
  const pokemons = useApi();

  const currentPokemon = pokemons.find(pkm => pkm.id == id);

  console.log(currentPokemon);

  return (
    <section className='detail-section'>
      <div className="detail-container">
        <button onClick={() => navigate(`/`)}>Choose an other Pokemon</button>
        {currentPokemon != undefined ? (
          <div className="detail-view-card" key={id}>
            <div className="card-image-container">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt={currentPokemon.name.english} />
            </div>
            <div className="card-content">
              <h2>{currentPokemon.name.english}</h2>
              <div className="card-text">
                <h3>Health {currentPokemon.base.HP}</h3>
                <h3>Attack {currentPokemon.base.Attack}</h3>
                <h3>Defense {currentPokemon.base.Defense}</h3>
              </div>
            </div>
          </div>
        ) : <h2>Couldn't find your Pokemon!</h2>}
      </div>
    </section>
  )
}

export default PokemonDetail
