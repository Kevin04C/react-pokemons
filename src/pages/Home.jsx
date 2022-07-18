import { useDispatch } from 'react-redux'
import { PokemonList } from '../components/PokemonList'
import { useEffect } from 'react';
import { getPokemons } from '../store/pokemons/thunks';
import { LogoPokemon } from '../components/LogoPokemon';

import styled from "./Home.module.css";

export const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getPokemons())

  }, [])
  

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className={styled.container}>
      <LogoPokemon />
      <form
        className={styled.form_pokemon}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Buscar Pokemón"
          autoComplete="off"
          className={`${styled.pokemon_search}`}
        />
      </form>
      <PokemonList />
    </div>
  );
};
