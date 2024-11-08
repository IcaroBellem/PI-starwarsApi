import PropTypes from 'prop-types';
import { Edit, X } from 'lucide-react';

const ItemCard = ({ item, onEdit, onDelete }) => (
  <div className="relative group card border rounded overflow-hidden shadow-md">
    <img src={item.image_url} alt={item.title || item.name} className="w-full h-48 object-cover" />
    <div className="p-2">
      <h3 className="text-lg font-bold text-white">{item.title || item.name}</h3>
      <p className="text-gray-300">{item.description}</p>
    </div>
    <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100">
      <button onClick={() => onEdit(item)} className="p-1 rounded bg-gray-800">
        <Edit className="text-white" />
      </button>
      <button onClick={() => onDelete(item)} className="p-1 rounded bg-red-600">
        <X className="text-white" />
      </button>
    </div>
  </div>
);

ItemCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ItemCard;
