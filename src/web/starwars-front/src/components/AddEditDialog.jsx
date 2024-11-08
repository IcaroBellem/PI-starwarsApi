import PropTypes from 'prop-types'
import ItemForm from './ItemForm'
import { Plus } from 'lucide-react'

const AddEditDialog = ({ editingItem, onClose, onSave }) => (
  <div>
    <button onClick={onClose} className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full">
      <Plus className="mr-2 h-4 w-4" /> Adicionar Item
    </button>
    {editingItem && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded shadow-md w-96">
          <h2 className="text-lg font-bold mb-4">{editingItem ? 'Editar Item' : 'Adicionar Novo Item'}</h2>
          <ItemForm item={editingItem} onSubmit={onSave} onCancel={onClose} />
        </div>
      </div>
    )}
  </div>
)

AddEditDialog.propTypes = {
  editingItem: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.oneOf(['movie', 'character']),
  }),
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
}

export default AddEditDialog
