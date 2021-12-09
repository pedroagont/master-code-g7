// REQUIREMENTS
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const app = express();
const { PostsModel } = require('./models');

// SERVER SETTINGS / MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

// ROUTES
app.get('/', (req, res) => {
  res.send('hello!');
});

// Create - POST
app.post('/api/v1/posts', (req, res) => {
  const { body } = req;

  const validBody = body.title && body.author && body.content && body.category;
  if (!validBody) {
    return res.status(400).send({
      message: 'Debes agregar un body con title, author, content y category'
    });
  }

  PostsModel.create(body)
    .then(newPost =>
      res.status(201).send({ message: 'Post publicado!', post: newPost })
    )
    .catch(error =>
      res
        .status(400)
        .send({ message: 'Error al crear post', error: error.message })
    );
});

// Read All - GET
app.get('/api/v1/posts', (req, res) => {
  PostsModel.find({ isActive: true })
    .then(posts => res.status(201).send({ message: 'Aquí los posts!', posts }))
    .catch(error =>
      res
        .status(400)
        .send({ message: 'Error al traer posts', error: error.message })
    );
});

// Read One - GET
app.get('/api/v1/posts/:id', (req, res) => {
  const { id } = req.params;

  PostsModel.findById(id)
    .then(post => res.status(201).send({ message: 'Aquí el post!', post }))
    .catch(error =>
      res
        .status(400)
        .send({ message: 'Error al traer post', error: error.message })
    );
});

// Update - PUT
app.put('/api/v1/posts/:id', (req, res) => {
  const { body } = req;
  const { id } = req.params;

  PostsModel.findByIdAndUpdate(id, body, { new: true })
    .then(post =>
      res.status(201).send({ message: 'Aquí el post actualizado!', post })
    )
    .catch(error =>
      res
        .status(400)
        .send({ message: 'Error al actualizar post', error: error.message })
    );
});

// Delete - DELETE (borrado lógico)
app.delete('/api/v1/posts/:id', (req, res) => {
  const { id } = req.params;

  PostsModel.findByIdAndUpdate(id, { isActive: false })
    .then(() => res.status(204).send())
    .catch(error =>
      res
        .status(400)
        .send({ message: 'Error al eliminar post', error: error.message })
    );
});

// Destroy - DELETE (borrado físico)
app.delete('/api/v1/posts/:id/destroy', (req, res) => {
  const { id } = req.params;

  PostsModel.findByIdAndDelete(id)
    .then(() => res.status(204).send())
    .catch(error =>
      res
        .status(400)
        .send({ message: 'Error al eliminar post', error: error.message })
    );
});

module.exports = app;
