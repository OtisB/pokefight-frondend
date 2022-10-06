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
            <h2>{pokemon.name.english} won!!!</h2>
          </div>
        </div>
      ) : <h2>Couldn't find your Pokemon!</h2>}
    </section>
  )
}

export default PokemonDetail;
