const { Schema } = require('mongoose');
const db = require('../db');

// SCHEMA DE MODELO PARA BLOG
const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

// CREANDO EL MODELO CON BASE AL SCHEMA CREADO
const BlogModel = db.model('BlogModel', blogSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = BlogModel;
