const express = require('express');
const dotenv = require('dotenv');

// Cargar las variables de entorno del archivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Ruta básica
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Ruta adicional
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});