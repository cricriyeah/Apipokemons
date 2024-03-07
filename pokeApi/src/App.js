// App.js

import './App.css';
import CustomCard from './componentes/CustomCard.js';
import CustomSearch from './componentes/CustomSearch';

import { useEffect, useState } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDataList, setPokemonDataList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  const pokemonURL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

  useEffect(() => {
    fetch(pokemonURL)
      .then((response) => response.json())
      .then((response) => {
        setPokemonList(response.results);
        const list = response.results;
        const promises = list.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );

        Promise.all(promises).then((pokemonDataList) => {
          setPokemonDataList(pokemonDataList);
          setFilteredPokemonList(pokemonDataList); // Mostrar todas las tarjetas inicialmente
        });
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredList = pokemonDataList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemonList(filteredList);
  };

  return (
    <div id="mainDiv">
      <div id="headDiv">
        <h1>Pokemonos :D</h1>
      </div>
      <CustomSearch onSearch={handleSearch} />
      <div id="cardDiv">
        {filteredPokemonList.length > 0 ? (
          filteredPokemonList.map((pokemon, index) => (
            <CustomCard
              key={index}
              imagen={pokemon.sprites.front_default}
              tittle={pokemon.name}
              text={
                'Numero: ' +
                pokemon.order +
                '\nPeso: ' +
                pokemon.weight
              }
            />
          ))
        ) : (
          <p>No se encontraron Pokémon.</p>
        )}
      </div>
    </div>
  );
}

export default App;
