const express = require('express');
const router = express.Router();

const characterController = require('../controllers/characterController');


router.get('/starwars-characters', characterController.getAllCharacters);

router.get('/starwars-characters/:id', characterController.getCharacterById);

router.post('/starwars-characters', characterController.createCharacter);

router.put('/starwars-characters/:id', characterController.updateCharacter);

router.delete('/starwars-characters/:id', characterController.deleteCharacter);

module.exports = router;