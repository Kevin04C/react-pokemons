import axios from "axios"
import { pokemonApi } from "../../api/pokemonApi"
import { setPokemons, startIsLoading } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
  
  return async (dispatch) => {

    dispatch(startIsLoading())
    
    const { data:{ results=[] } } = await pokemonApi.get(`pokemon?limit=40&offset=${page * 40}`)
    const response = await Promise.all(results.map(pokemon => axios.get(pokemon.url)))    
    const pokemons = response.map(pokemon => pokemon.data)

    dispatch(setPokemons(pokemons))
    
  } 
}