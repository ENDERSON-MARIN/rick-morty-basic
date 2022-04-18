import imageRickMorty from "./img/rick-morty.png";

import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null); //estado

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");

    const characterApi = await api.json();
    //console.log(characterApi);//respuesta completa de la API
    setCharacters(characterApi.results);
  };

  //console.log(characters); //estado comienza inicializado en null
  //console.log(characters); //estado al ser seteado con setCharacters ya contiene la informalcion de los personajes

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? ( //si el estado tiene información mostrar el componente Characters
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          //sino mostrar la imagen y el botón para hacer la búsqueda
          <>
            <img className="img-home" src={imageRickMorty} alt="Rick & Morty" />
            <button onClick={reqApi} className="btn-search">
              Mostrar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
