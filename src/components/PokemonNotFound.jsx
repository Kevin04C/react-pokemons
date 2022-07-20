import Pikachu from '../assets/pikachu-sad.png';
import styled from "../pages/SearchPokemon.module.css";

export const PokemonNotFound = () => {
  return (
    <div className={`${styled.container} ${styled.pokemon_not_found}`}>
        <img 
          src={Pikachu}
          alt= "Pikachu sad"
        />
      <p>¡Ohh no!!, el pokémon no existe</p>
    </div>
  );
};
