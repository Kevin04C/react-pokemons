import { createSlice } from '@reduxjs/toolkit';
import { parsePath } from 'react-router-dom';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    isLoading: false,
    pokemons: [],
    page: 0
  },
  reducers: {
    startIsLoading: (state) => {
      state.isLoading =  true
    },
    setPokemons: (state, action) => {
      state.pokemons.push(...action.payload);
      state.isLoading = false;
      state.page += 1;
    }
  },
});

export const { startIsLoading, setPokemons } = pokemonSlice.actions;