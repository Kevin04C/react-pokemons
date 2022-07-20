import { useDispatch, useSelector } from "react-redux";
import { Pokemon } from "./Pokemon";
import { Spinner } from "./Spinner";

import styled from "./PokemonList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPokemons } from "../store/pokemons/thunks";
import { useEffect } from "react";

export const PokemonList = () => {
  const dispatch = useDispatch();

  const {
    pokemons = [],
    isLoading,
    page,
  } = useSelector((store) => store.pokemons);

  console.log(page);

  return (
    <>
      <div>
        <InfiniteScroll
          dataLength={pokemons.length}
          next={() => dispatch(getPokemons(page))}
          hasMore={true}
          loader={<Spinner />}
        >
          <div className={styled.grid_pokemons}>
            {pokemons.map((pokemon) => (
              <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};
