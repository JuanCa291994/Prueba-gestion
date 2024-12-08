const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require ('dotenv').config();

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
