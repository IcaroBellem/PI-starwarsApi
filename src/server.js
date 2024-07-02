const express = require('express');
const connectDB = require('./database/connection');
const bodyParser = require('body-parser');
const characters = require('./routes/characters');
const movies = require('./routes/movies');
require('dotenv').config();
const app = express();

const startConnection = async () => {
    try {
        await connectDB();
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server running on ${port}`);
        });
    } catch (err) {
        console.log('Erro ao conectar com o banco', err);
        process.exit(1);
    }
};
startConnection();
module.exports = startConnection;

app.use(bodyParser.json());
app.use('/', characters);
app.use('/', movies);
