const mongoose = require('../db');
const { Schema } = mongoose;

// SCHEMA DE MODELO PARA BLOG
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['news', 'sports', 'entertainment', 'leisure'],
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// CREANDO EL MODELO CON BASE AL SCHEMA CREADO
const PostsModel = mongoose.model('PostsModel', postSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = PostsModel;
