import { useState } from 'react';
import { Plus } from 'lucide-react';
import AddItemModal from './AddItemModal';
import PropTypes from 'prop-types';

const AddItemButton = ({ onAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        <Plus size={24} />
      </button>
      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={onAdd}
      />
    </>
  );
};
AddItemButton.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddItemButton;
