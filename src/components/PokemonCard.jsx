import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pokemonCard.css'

const PokemonCard = ({pokemon}) => {

    const [pokemonCharacter, setPokemonCharacter] = useState({})
    const navigate = useNavigate()


    useEffect (() => {
        axios.get(`${pokemon}`)
        .then ( res => setPokemonCharacter(res.data) )
    },[])

   console.log(pokemonCharacter);
    
    return (
        <li className='pokemon-character' onClick={ () => navigate (`/pokedex/${pokemonCharacter.id }`) }>
            <div className='pokemon-character-image'>
                <img src={pokemonCharacter.sprites?.front_default}/>
            </div>       
            <h3>{pokemonCharacter.name}</h3>
            <div className='pokemon-character-type'>
                <b>Type: </b> <div>{pokemonCharacter.types?.[0].type.name}</div>
            </div>
        </li>
    );
};

export default PokemonCard;