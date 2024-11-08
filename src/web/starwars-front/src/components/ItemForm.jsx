import { useState } from 'react'
import PropTypes from 'prop-types'

const ItemForm = ({ item, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(item?.title || '')
  const [image, setImage] = useState(item?.image || '')
  const [type, setType] = useState(item?.type || 'movie')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ id: item?.id || Date.now().toString(), title, image, type })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input className="w-full p-2 border rounded" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
      <input className="w-full p-2 border rounded" placeholder="URL da imagem" value={image} onChange={e => setImage(e.target.value)} />
      <select className="w-full p-2 border rounded" value={type} onChange={e => setType(e.target.value)}>
        <option value="movie">Filme</option>
        <option value="character">Personagem</option>
      </select>
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-600 text-white rounded">Cancelar</button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">{item ? 'Atualizar' : 'Adicionar'}</button>
      </div>
    </form>
  )
}

ItemForm.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.oneOf(['movie', 'character']),
  }),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default ItemForm
