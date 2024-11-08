import { useState, useEffect } from 'react';

export function useFetchData() {
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchMovies();
    fetchCharacters();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:3000/starwars-movies');
      if (!response.ok) {
        throw new Error('Erro ao buscar filmes');
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  const fetchCharacters = async () => {
    try {
      const response = await fetch('http://localhost:3000/starwars-characters');
      if (!response.ok) {
        throw new Error('Erro ao buscar personagens');
      }
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.error('Erro ao buscar personagens:', error);
    }
  };

  return { movies, characters, setMovies, setCharacters };
}
