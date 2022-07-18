import { useNavigate } from "react-router-dom";
import { addZero } from "../helpers";

import styled from "./Pokemon.module.css";

export const Pokemon = ({ pokemon }) => {
  let navigate = useNavigate();

  const { name, id, sprites: { other: { home } } } = pokemon;

  const handleClickPokemon = () => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <div className={styled.card_pokemon} onClick={handleClickPokemon}>
      <figure>
        <img
          src={home["front_default"]}
          alt={`pokemon ${pokemon.name}`}
          className={styled.pokemon}
        />
      </figure>
      <div className={styled.pokemon__info}>
        <p className={styled.pokemon__info__id}>{addZero(id)}</p>
        <p className={styled.pokemon__info__name}>{name}</p>
      </div>
    </div>
  );
};
