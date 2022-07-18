import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo_pokemon.png'
import styled from './LogoPokemon.module.css'

export const LogoPokemon = () => {

  let navigate = useNavigate();

  const handleToHome = () => {
    navigate("/");
  }

  return (
    <figure 
      onClick={handleToHome}
      className={styled.content_logo}
    >
      <img 
        src={Logo} 
        alt="Logo pokemon"
      />
    </figure>
  );
};
