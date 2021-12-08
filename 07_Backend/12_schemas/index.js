const mongoose = require('mongoose');

const db = require('./db');
const { BlogModel } = require('./models');

// CREATE
BlogModel.create({
  title: 'Un día increíble para aprender Schemas',
  author: 'Pedro A. González',
  body:
    'Hoy me la pasé increíble en la clase del master g7 ya que estoy feliz de aprender schema'
})
  .then(newPost => console.log('Post publicado!', newPost))
  .catch(error => console.log(error));

// GET ALL
BlogModel.find()
  .then(posts => console.log('MIS POSTS', posts))
  .catch(error => console.log(error));

// GET ONE
BlogModel.findById('61aec6c7279483496602e4e2')
  .then(postEncontrado => console.log('POST ENCONTRADO', postEncontrado))
  .catch(error => console.log(error));

// UPDATE
BlogModel.findByIdAndUpdate(
  '61aec6c7279483496602e4e2',
  { title: 'OTRO día increíble para aprender Schemas' },
  { new: true }
)
  .then(updatePost => console.log('POST ACTUALIZADO', updatePost))
  .catch(error => console.log(error));

// DELETE
BlogModel.findByIdAndDelete('61a98a48df12e8684ee55e27')
  .then(() => console.log('POST BORRADO'))
  .catch(error => console.log(error));
