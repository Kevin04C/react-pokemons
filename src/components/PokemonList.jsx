import { useSelector } from "react-redux";
import { Pokemon } from "./Pokemon";
import { Spinner } from "./Spinner";

import styled from "./PokemonList.module.css";

export const PokemonList = () => {
  const { pokemons = [], isLoading } = useSelector((store) => store.pokemons);
  
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styled.grid_pokemons}>
          {pokemons.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      )}
    </>
  );
};
