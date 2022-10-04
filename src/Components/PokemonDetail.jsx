import './PokemonDetail.css';

function PokemonDetail({ pokemon }) {

  return (
    <section className='detail-section'>
      {pokemon ? (
        <div className="detail-view-card" key={pokemon.id}>
          <div className="card-image-container">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name.english} />
          </div>
          <div className="card-content">
            <h2>{pokemon.name.english}</h2>
            <div className="card-text">
              <h3>Health {pokemon.base.HP}</h3>
              <h3>Attack {pokemon.base.Attack}</h3>
              <h3>Defense {pokemon.base.Defense}</h3>
            </div>
          </div>
        </div>
      ) : <h2>Couldn't find your Pokemon!</h2>}
    </section>
  )
}

export default PokemonDetail;
