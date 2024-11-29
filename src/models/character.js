const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: String,
    species: String,
    affiliation: String,
    homeworld: String,
    description: String,
    image_url: String,
});

module.exports = mongoose.model('Character', characterSchema);