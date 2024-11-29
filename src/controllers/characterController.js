const Character = require('../models/character');

exports.getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getCharacterById = async (req, res) => {
    try {
        const character = await Character.findById(req.params.id);
        if (!character) return res.status(404).json({ message: 'Character not found' });
        res.json(character);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createCharacter = async (req, res) => {
    const character = new Character({
        name: req.body.name,
        species: req.body.species,
        affiliation: req.body.affiliation,
        homeworld: req.body.homeworld,
        description: req.body.description,
        image_url: req.body.image_url,
    });

    try {
        const newCharacter = await character.save();
        res.status(201).json(newCharacter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateCharacter = async (req, res) => {
    try {
        const character = await Character.find();
        if (!character) return res.status(404).json({ message: 'Character not found' });

        if (req.body.name) character.name = req.body.name;
        if (req.body.species) character.species = req.body.species;
        if (req.body.affiliation) character.affiliation = req.body.affiliation;
        if (req.body.homeworld) character.homeworld = req.body.homeworld;
        if (req.body.description) character.description = req.body.description;
        if (req.body.image_url) character.image_url = req.body.image_url;

        const updatedCharacter = await character.save();
        res.json(updatedCharacter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteCharacter = async (req, res) => {
    try {
        const character = await Character.findById(req.params.id);
        if (!character) return res.status(404).json({ message: 'Character not found' });
        await Character.findByIdAndDelete(req.params.id);
        res.json({ message: 'Character deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};