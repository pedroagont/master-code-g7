require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_DATABASE_USERNAME}:${process.env.MONGODB_DATABASE_PASSWORD}@cluster0.ol6yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.log('Error conectando', err.message));

module.exports = mongoose;
