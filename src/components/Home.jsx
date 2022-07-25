import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getUserName } from '../store/slices/user.slice';
import ash from '../assets/ash.png' 
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

   const [inputUserName, setInputUserName] = useState("")
   const username = useSelector(state => state.user)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const submit = e => {
      e.preventDefault()
      dispatch(getUserName(inputUserName))
      navigate('/pokedex')
   }

   return (
      <div className='home'>
         <h1>Hello Trainer</h1>
         <img src={ash} alt="" className='ash-image'/>
         <p>Give your name to start this history</p>
         <form onSubmit={submit}>
            <input
               type="text"
               placeholder='Your name.... '
               value={inputUserName}
               onChange={e => setInputUserName(e.target.value)} 
               className='input-name'/>
            <button type='submit' className='button'><FontAwesomeIcon  icon={faArrowRight} /></button>
         </form>
      </div>
   );
};

export default Home;