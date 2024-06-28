const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    img_url: String,
    trailer_url: String,
});

module.exports = mongoose.model('Movie', movieSchema);