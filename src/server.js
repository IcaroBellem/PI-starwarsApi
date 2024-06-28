const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const characterRoutes = require('./routes/characters');
app.use('/src/routes/characters', characterRoutes);

const movieRoutes = require('./routes/movies');
app.use('/src/routes/movies', movieRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
