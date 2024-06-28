const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

// Get all characters
router.get('/', characterController.getAllCharacters);

// Get character by ID
router.get('/:id', characterController.getCharacterById);

// Create new character
router.post('/', characterController.createCharacter);

// Update character by ID
router.put('/:id', characterController.updateCharacter);

// Delete character by ID
router.delete('/:id', characterController.deleteCharacter);

module.exports = router;