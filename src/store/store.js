import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemons/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer
  },
});
