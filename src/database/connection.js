const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.log('Erro ao conectar com o banco',err);
        process.exit(1);
    }
};
module.exports = connectDB;