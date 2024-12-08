// const express = require('express');
// const connectDB = require('./config/db');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require ('dotenv').config();

// const app = express();

// const uri = process.env.MONGODB_URI;

// mongoose.connect(uri)
//   .then(() => {
//     console.log('Conectado a la base de datos');
//   })
//   .catch((err) => {
//     console.error('Error de conexión:', err);
//   });

// connectDB();

// app.use(cors());

// app.use(express.json());

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en el puerto ${PORT}`);
// });

require('dotenv').config();  // Carga las variables de entorno

console.log('MONGODB_URI:', process.env.MONGODB_URI);  // Verifica que la URI se cargue

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

// Verifica si la URI está cargada correctamente
const uri = process.env.MONGODB_URI;  

if (!uri) {
  console.error('La URI de la base de datos no está definida');
  process.exit(1);  // Detiene la ejecución si la URI es undefined
}

mongoose.connect(uri)
  .then(() => {
    console.log('Conectado a la base de datos');
  })
  .catch((err) => {
    console.error('Error de conexión:', err);
  });

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
