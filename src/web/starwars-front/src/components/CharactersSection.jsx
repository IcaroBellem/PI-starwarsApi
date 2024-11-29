import { useState } from 'react';
import PropTypes from 'prop-types';

const CharactersSection = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const closeCard = () => {
    setSelectedCharacter(null);
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Personagens</h2>
      <div className="flex flex-wrap gap-6">
        {characters.map((character) => (
          <div key={character._id} className="flex flex-col items-center">
            <div
              className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
              onClick={() => handleCharacterClick(character)}
            >
              {character.image_url ? (
                <img src={character.image_url} alt={character.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-white opacity-50">No Image</span>
              )}
            </div>
            <h3 className="mt-4 text-white text-center font-semibold">{character.name}</h3>
          </div>
        ))}
      </div>
      {selectedCharacter && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-900 p-6 rounded-lg w-80 text-center relative">
            <button
              onClick={closeCard}
              className="absolute top-2 right-2 text-black font-bold"
            >
              X
            </button>
            <img src={selectedCharacter.image_url} alt={selectedCharacter.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{selectedCharacter.name}</h3>
            <p><strong>Espécie:</strong> {selectedCharacter.species}</p>
            <p><strong>Afiliação:</strong> {selectedCharacter.affiliation}</p>
            <p><strong>Planeta Natal:</strong> {selectedCharacter.homeworld}</p>
            <p className="mt-4">{selectedCharacter.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

CharactersSection.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string,
      species: PropTypes.string,
      affiliation: PropTypes.string,
      homeworld: PropTypes.string,
      description: PropTypes.string,
      image_url: PropTypes.string,
    })
  ).isRequired,
};

export default CharactersSection;
