// src/pages/StarWarsNetflix.jsx
import { useState } from 'react';
import MoviesSection from '../components/MoviesSection';
import CharactersSection from '../components/CharactersSection';
import { useFetchData } from '../hooks/useFetchData';

const Home = () => {
  const { movies, characters } = useFetchData();
  const [ setEditingItem] = useState(null);

  const handleEdit = (item) => setEditingItem(item);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Star Wars Galaxy</h1>
      <MoviesSection movies={movies} onEdit={handleEdit} />
      <CharactersSection characters={characters} onEdit={handleEdit} />
    </div>
  );
}
export default Home;
