import { useState } from 'react';
import PropTypes from 'prop-types';

const ItemForm = ({ item, onSubmit, onCancel }) => {
  // Estados para capturar os valores do formulário
  const [title, setTitle] = useState(item?.title || '');
  const [image, setImage] = useState(item?.image_url || ''); // Corrigido para `img_url` no backend
  const [type, setType] = useState(item?.type || 'movie');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepara os dados para envio
    const data = {
      id: item?.id || Date.now().toString(), // Gera um ID único, se necessário
      title,
      image_url: image, // Mapeado para o backend
      type,
    };

    console.log('Enviando dados:', data); // Para depuração
    onSubmit(data); // Chama o método `onSubmit` passado como prop
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="w-full p-2 border rounded"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="URL da imagem"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <select
        className="w-full p-2 border rounded"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="movie">Filme</option>
        <option value="character">Personagem</option>
      </select>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-600 text-white rounded"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {item ? 'Atualizar' : 'Adicionar'}
        </button>
      </div>
    </form>
  );
};

ItemForm.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image_url: PropTypes.string, // Corrigido para alinhar com o backend
    type: PropTypes.oneOf(['movie', 'character']),
  }),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ItemForm;
