import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import PokemonCard from './PokemonCard';
import { useNavigate } from 'react-router-dom'
import './pokedex.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Pagination from './Pagination';

const Pokedex = () => {

   const username = useSelector(state => state.user)
   const [pokemons, setPokemons] = useState([])
   const [ pokemonSearch, setPokemonSearch ] = useState("")
   const [ types, setTypes ] = useState ([])

   const [ currentPage, setCurrentPage ] = useState (1)
   const [ postPerPage, setPostPerPage ] = useState (12)

   const navigate = useNavigate ()

   useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon/')
         .then(res => setPokemons( res.data.results ))

      axios.get('https://pokeapi.co/api/v2/type/')
      .then( res => setTypes ( res.data.results ) )
   }, [])

   console.log(pokemons);

   const search = e => {
      e.preventDefault()
      navigate ( `/pokedex/${ pokemonSearch }` )
   }

   const selectOption = e => {
      axios.get(e.target.value)
      .then ( res => setPokemons ( res.data.pokemon  ) )
   }

   console.log(pokemons);

   const indexOfLastPost = currentPage * postPerPage
   const indexOfFirstPost = indexOfLastPost - postPerPage
   const currentPostPokemons = pokemons.slice ( indexOfFirstPost, indexOfLastPost )

   const paginate = pageNumber => {
      setCurrentPage (pageNumber)
      navigate ( `/pokedex/` )
   }

   return (
      <div className='pokedex'>
         <h1>Pokedex</h1>
         <p>Welcome <b>{username}</b>, here you can find your favourite pokemon </p>

         <form onSubmit={search}>
            <input 
               type="text" 
               placeholder='Ingresa tu pokemon'
               value={pokemonSearch}
               onChange={ e => setPokemonSearch ( e.target.value ) }
               className="input-pokemon"/>
            <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
         </form>

         <select onChange={ selectOption } className="select-pokemon">
            <option value="0">Selecciona un pokemon</option>
            {
               types.map ( type => (
                  <option key={ type.url } value={ type.url }>{ type.name }</option>
               ) )
            }
         </select>

         <ul className='pokemon-character-list'>
            {
               currentPostPokemons.map(pokemon => (
                  <PokemonCard 
                     pokemon={ pokemon.url? pokemon.url : pokemon.pokemon.url } 
                     key={ pokemon.url? pokemon.url : pokemon.pokemon.url }/>
               ))
            }
         </ul>
         <Pagination postPerPage={postPerPage} totalPosts={pokemons.length} paginate={paginate} />
      </div>
   );
};

export default Pokedex;