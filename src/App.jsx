import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PokemonDetails from './components/PokemonDetails'
import Pokedex from './components/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes'
import background from './assets/fondo-pokemon.png'

function App() {

  return (
    <HashRouter>
    <div className="App">
      <img src={background} alt="" className='pokemon-image'/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route element={ <ProtectedRoutes/> }>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokemonDetails />}/>
        </Route>
      </Routes>
    </div>
    </HashRouter>
  )
}

export default App
