import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Characters from "./components/Characters/Characters"
import InfoPersonajes from "./pages/InfoPersonajes/InfoPersonajes";

function App() {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => {
        const data = res.data;
        setCharacters(data.results)
        // setInfo(data.info);
        setPages(data.info.pages)
      })
  }, [])

  const charterForPages = (pages) => {
    axios.get("https://rickandmortyapi.com/api/character/?page="+pages)
      .then(res => {
        const data = res.data;
        setCharacters(data.results)
      })
  }
 
  return (
    <div className="App">
      <NavBar />
      <div className="container mt-4">
      <Routes>
        <Route path='/' element={< Characters characters={characters} pages={pages} charterForPages={charterForPages}/> } /> 
        {/* lo que se pone adentro es para poderlo usar edntro del componente que se llama */}
        <Route path='/personaje/:id' element={<InfoPersonajes />} />
      </Routes>
      </div>      
    </div>
  );
}

export default App;
