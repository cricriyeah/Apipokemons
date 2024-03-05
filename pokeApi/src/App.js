
import './App.css';
import CustomCard from './CustomCard.js'


import { useEffect, useState } from 'react';

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDataList, setPokemonDataList] = useState([]);

  const pokemonURL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

  useEffect(() => {
    fetch(pokemonURL)
      .then(response => response.json())
      .then(response => {
        setPokemonList(response.results)
        const list = response.results;
        const promises = list.map(pokemon =>
          fetch(pokemon.url).then(response => response.json())
        );

        Promise.all(promises)
          .then(pokemonDataList => {
            setPokemonDataList(pokemonDataList)
          })
      })
  }, []);

  return (
    <div className="App px-5" > 
      <div id="headDiv">
        <h1>Pokemonos :D</h1>
      </div>
      <div class="md-form active-cyan active-cyan-2 mb-3">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
      </div>
      <div id="cardDiv">

      {pokemonDataList.length > 0 ? (
        pokemonList.map((pokemon, index) => (
         <CustomCard 
          imagen={pokemonDataList[index].sprites.front_default} 
          tittle={pokemon.name}
          text={
            "Numero: "+pokemonDataList[index].order+
            "\nPeso: "+pokemonDataList[index].weight}
          />

        ))
      ):(
        <CustomCard Title='cargando'/>

      )}


      </div>

    </div>
  );
}

export default App;
