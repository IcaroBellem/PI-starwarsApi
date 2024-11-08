import { useState } from 'react';
import PropTypes from 'prop-types';

const AddItemModal = ({ isOpen, onClose, onAdd }) => {
  const [type, setType] = useState('movie');
  const [title, setTitle] = useState('');
  const [species, setSpecies] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [homeworld, setHomeworld] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    const newItem = {
      type,
      ...(type === 'movie' ? { title } : { name: title }),
      description,
      image_url: imageUrl,
      ...(type === 'movie' && { trailer_url: trailerUrl }),
      ...(type === 'character' && { species, affiliation, homeworld, description }),
    };
    onAdd(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-white mb-4">Adicionar Novo Item</h2>
    
        <label className="text-white mb-2 block">Tipo</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
        >
          <option value="movie">Filme</option>
          <option value="character">Personagem</option>
        </select>

        <input
          type="text"
          placeholder={type === 'movie' ? "Título" : "Nome"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
        />
        {type === 'character' && (
          <>
            <input
              type="text"
              placeholder="Espécie"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              className="w-full p-2 mb-4 rounded text-black"
            />

            <input
              type="text"
              placeholder="Afiliação"
              value={affiliation}
              onChange={(e) => setAffiliation(e.target.value)}
              className="w-full p-2 mb-4 rounded text-black"
            />

            <input
              type="text"
              placeholder="Mundo de Origem"
              value={homeworld}
              onChange={(e) => setHomeworld(e.target.value)}
              className="w-full p-2 mb-4 rounded text-black"
            />
          </>
        )}

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
        />

        <input
          type="text"
          placeholder="URL da Imagem"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-2 mb-4 rounded text-black"
        />

        {type === 'movie' && (
          <input
            type="text"
            placeholder="URL do Trailer"
            value={trailerUrl}
            onChange={(e) => setTrailerUrl(e.target.value)}
            className="w-full p-2 mb-4 rounded text-black"
          />
        )}


        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

AddItemModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default AddItemModal;
