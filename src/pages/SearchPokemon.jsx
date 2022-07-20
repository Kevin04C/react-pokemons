import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pokemonApi } from "../api/pokemonApi";
import { FormPokemon } from "../components/FormPokemon";
import { Spinner } from "../components/Spinner";
import { Sex } from "../components/Sex";
import { LogoPokemon } from "../components/LogoPokemon";
import { addZero } from "../helpers";

import styled from "./SearchPokemon.module.css";
import { PokemonNotFound } from "../components/PokemonNotFound";

export const SearchPokemon = () => {
  let navigate = useNavigate();

  const [dataPokemon, setDataPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    id: idPokemon,
    name,
    sprites,
    weight,
    abilities = [],
    height,
    types,
  } = dataPokemon;

  const writeTypes = () => {
    let typesPoKemon = [];

    if (types) {
      types.forEach((type) => {
        typesPoKemon.push(
          <p className={styled.pokemon__attributes__atribute}>
            {type.type.name}
          </p>
        );
      });
    }

    return typesPoKemon;
  };

  const { id } = useParams();

  const getPokemon = async () => {
    setDataPokemon({});
    setIsError(false);
    try {
      setIsLoading(true);
      const { data } = await pokemonApi.get(`/pokemon/${id}`);
      setDataPokemon(data);
    } catch (err) {
      if (err.response.status === 404) setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, [id]);

  const handleToBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styled.container}>
        <header>
          <LogoPokemon />
          <nav className={styled.nav}>
            <i
              className={`fa-solid fa-angle-left ${styled.icon_back}`}
              onClick={handleToBack}
            ></i>
            <FormPokemon />
          </nav>
        </header>
      </div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <PokemonNotFound />
      ) : (
        <div className={`${styled.wrapper_pokemon} ${styled.container}`} >
          <div className={`${styled.pokemon_search} ${styled.container}`}>
            <div className={styled.pokemon__header}>
              <span className={styled.pokemon__id}>
                {idPokemon && addZero(idPokemon)}
              </span>
              <span className={styled.pokemon__name}>{name}</span>
            </div>
            <div className={styled.pokemon__body}>
              <figure>
                <img
                  src={sprites?.other?.home["front_default"]}
                  alt={`pokemon ${name}`}
                />
              </figure>
            </div>
            <div className={styled.pokemon__attributes}>{writeTypes()}</div>
          </div>
          <div className={styled.pokemon__statistics}>
            <div className={styled.content__statistics}>
              <div>
                <h3>Altura</h3>
                <p>{height / 10}m</p>
              </div>
              <div>
                <h3>Categoría</h3>
              </div>
              <div>
                <h3>Peso</h3>
                <p>{weight / 10}kg</p>
              </div>
              <div>
                <h3>Habilidad</h3>
                {abilities[0]?.ability.name}
              </div>
              <div>
                <h3>Sexo</h3>
                <Sex />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
