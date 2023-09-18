import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offSet, setOffset] = useState([0]);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=${offset}`"
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offSet]);

  return (
    <main>
      <button
        type="button"
        onClick={() => setOffset(offset === 0 ? 0 : offset - 20)}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => setOffset(offset + 20)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
