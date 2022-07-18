import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { PokemonList } from '../components/PokemonList'
import { getPokemons } from '../store/pokemons/thunks';
import { LogoPokemon } from '../components/LogoPokemon';
import { FormPokemon } from '../components/FormPokemon';

import styled from "./Home.module.css";

export const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getPokemons())

  }, [])
  
  return (
    <div className={styled.container}>
      <LogoPokemon />
      <FormPokemon />
      <PokemonList />
    </div>
  );
};
