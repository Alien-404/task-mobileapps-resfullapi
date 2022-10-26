const express = require('express');
require('dotenv').config();

// init express
const app = express();

// miscellaneous
const BASE_URL = `http://localhost:${process.env.PORT}`;

// variable
const mahasiswaRoutes = require('./routes/mahasiswa');

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// root route
app.use('/mahasiswa', mahasiswaRoutes);

// listen app
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server running ${BASE_URL}`);
});
