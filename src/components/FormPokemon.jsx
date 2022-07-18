import styled from "./FormPokemon.module.css";

export const FormPokemon = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className={styled.form_pokemon} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar Pokemón"
        autoComplete="off"
        className={`${styled.pokemon_search}`}
      />
    </form>
  );
};
