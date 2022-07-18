import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokemonApi } from "../api/pokemonApi";
import { LogoPokemon } from "../components/LogoPokemon";
import { Spinner } from "../components/Spinner";
import { addZero } from "../helpers";

import styled from "./SearchPokemon.module.css";

export const SearchPokemon = () => {
  const [dataPokemon, setDataPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { id: idPokemon, name, sprites } = dataPokemon;

  const { id } = useParams();

  const getPokemon = async () => {
    try {
      setIsLoading(true);
      const { data } = await pokemonApi.get(`/pokemon/${id}`);
      setDataPokemon(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemon();
  }, [id]);

  return (
    <div className={styled.container}>
      <nav>
        <LogoPokemon />
      </nav>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styled.pokemon_search}>
          <div>
            <div className={styled.pokemon__header}>
              <span className={styled.pokemon__id}>
                {idPokemon && addZero(idPokemon)}
              </span>
              <span className={styled.pokemon__name}>{name}</span>
            </div>
            <div className={styled.pokemon_body}>
              <figure>
                <img
                  src={sprites?.other?.home["front_default"]}
                  alt={`pokemon ${name}`}
                />
              </figure>
            </div>
          </div>
          <div>
            <p>Fuego</p>
            <p>Bolador</p>
          </div>
          <div className={styled.pokemon__statistics}>
            aqui estadisticas
          </div>
        </div>
      )}
    </div>
  );
};
