import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Contact from './components/contact/Contact.jsx';

import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }
  return (
  
    <div className='App' style={{ padding: '0px' }}>
    <Nav onSearch={onSearch} /> {/* de esta forma nav aparecera en todas las secciones  */}
    <Routes>
      <Route path="/home" element={<Cards onClose={onClose} characters={characters}/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="detail/:detailId" element={<Detail/>}/>
    </Routes>
  </div>
  )
}

export default App
