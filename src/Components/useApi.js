import { useEffect, useState } from 'react';

function useApi() {
  const [pokemon, setAllPokemon] = useState([]);

  const API = "http://localhost:8080/pokemon";

  const getAllPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      //TODO error handling
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return 'something';
}

export default useApi