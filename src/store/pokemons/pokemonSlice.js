import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    isLoading: false,
    pokemons: []
  },
  reducers: {
    startIsLoading: (state) => {
      state.isLoading =  true
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      state.isLoading = false;
    }
  },
});

export const { startIsLoading, setPokemons } = pokemonSlice.actions;