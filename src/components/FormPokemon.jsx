import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "./FormPokemon.module.css";

export const FormPokemon = () => {

  let navigate = useNavigate()

  const [name, setName] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim() === "") return;
    
    navigate(`/pokemon/${name.trim().toLowerCase()}`);
    // setName("");
  }

  return (
    <form className={styled.form_pokemon} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Pokémon"
        autoComplete="off"
        className={`${styled.pokemon_search}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};
