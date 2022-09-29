import "./PokemonDetail.css";

function PokemonDetail({ pokemon }) {

  //console.log(pokemon);


  return (
    <div>

      <h2>{pokemon.name.english}</h2>

      <p>Attack {pokemon.base.Attack} Defense {pokemon.base.Defense}</p>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name.english} />

    </div>
  )
}

export default PokemonDetail;
