import PropTypes from 'prop-types';
import { FaPlay } from 'react-icons/fa'; 

const MoviesSection = ({ movies }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-white mb-6">Filmes</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie, index) => (
        <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="h-80 bg-gray-600 flex items-center justify-center"> 
            {movie.image_url ? (
              <img 
                src={movie.image_url} 
                alt={movie.title} 
                className="w-full h-full object-contain" 
              />
            ) : (
              <span className="text-white opacity-50">No Image</span>
            )}
          </div>
          <div className="p-4 flex-1">
            <h3 className="text-lg font-bold text-white">{movie.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{movie.description}</p>
          </div>
          <div className="p-4 pt-0 mt-auto flex justify-start items-center"> 
            <a 
              href={movie.trailer_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-red-500 hover:underline flex items-center space-x-2"
            >
              <FaPlay className="mr-1" />
              <span>Ver Trailer</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

MoviesSection.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image_url: PropTypes.string,
      trailer_url: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesSection;
