import useApi from './useApi';

function Main() {
  const pokemons = useApi();
  return (
    <div>
      Main
    </div>
  )
};

export default Main;
