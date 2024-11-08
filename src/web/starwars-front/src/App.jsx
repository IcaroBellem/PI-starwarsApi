import { useState, useEffect } from 'react';
import MoviesSection from './components/MoviesSection';
import CharactersSection from './components/CharactersSection';
import { useFetchData } from './hooks/useFetchData';
import AddItemButton from './components/AddItemButton';

function App() {
  const { movies: initialMovies, characters: initialCharacters } = useFetchData();
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    setMovies(initialMovies);
    setCharacters(initialCharacters);
  }, [initialMovies, initialCharacters]);

  const handleAddItem = (newItem) => {
    fetch(`http://localhost:3000/starwars-${newItem.type === 'movie' ? 'movies' : 'characters'}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (newItem.type === 'movie') {
          setMovies((prevMovies) => [...prevMovies, data]); 
        } else {
          setCharacters((prevCharacters) => [...prevCharacters, data]); 
        }
      })
      .catch((error) => console.error('Erro ao adicionar item:', error));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Star Wars Galaxy</h1>
      
      <MoviesSection movies={movies} />
      <CharactersSection characters={characters} />
      <AddItemButton onAdd={handleAddItem} />
    </div>
  );
}

export default App;
