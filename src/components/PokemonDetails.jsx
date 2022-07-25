import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import shortid from 'shortid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; 
import './pokemonDetails.css'

const PokemonDetails = () => {

    const [ pokemonDetails, setPokemonDetails ] = useState ({})
    const [ pokemonLocation, setPokemonLocation ] = useState ({})

    const { id } = useParams()

    useEffect ( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then ( res => setPokemonDetails( res.data ) )

        axios.get(`https://pokeapi.co/api/v2/location/${id}`)
        .then ( res =>  setPokemonLocation ( res.data )  )
        
    },[ id ] )

    return (
        <div className='pokemon-details'>
            <div className='principal-information'>
                <img src={pokemonDetails.sprites?.other?.dream_world?.front_default} alt="" />
                <div className='weight-height'>
                    <div><h4>{pokemonDetails.weight}</h4><b>Weight</b></div>
                    <div><h4>{pokemonDetails.height}</h4><b>Height</b></div>
                </div>
                <h1>{ pokemonDetails.name }</h1>
                <h4>N° {pokemonDetails.id}</h4>
            </div>
            <div className='types-abilities'>
                <div className='type'>
                    <h3>Type</h3>
                    <div>
                        {
                            pokemonDetails.types?.map ( type => (
                                <h4 key={shortid.generate()}>{type.type.name}</h4>
                            ) )
                        }
                    </div>
                </div>
                <div className='abilities'>
                    <h3>Abilities</h3>
                    <div>
                        {
                            pokemonDetails.abilities?.map ( ability => (
                                <h4 key={shortid.generate()}>{ability.ability.name}</h4>
                            ) )
                        }
                    </div>
                    
                </div>
            </div>
            <div className='location-movements'>
                <div className='location'>
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <h4>{pokemonLocation.name}</h4>
                </div>
                <div className='movements'>
                    <h4>Movements</h4>
                    <ul>
                        {
                            pokemonDetails.moves?.map ( move => (
                                <li key={shortid.generate()}>
                                    {move.move.name}
                                </li>
                            ) )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;