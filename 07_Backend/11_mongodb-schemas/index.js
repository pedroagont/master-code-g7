const db = require('./db');

const CatModel = db.model('CatModel', { name: String });

// CREATE
CatModel.create({ name: 'Zildjian' }).then(newCat =>
  console.log('MEOW!', newCat)
);

// GET ALL
CatModel.find().then(cats => console.log('MIS GATOS', cats));

// GET ONE
CatModel.findById('61a98a48df12e8684ee55e27').then(foundCat =>
  console.log('GATO ENCONTRADO', foundCat)
);

// UPDATE
CatModel.findByIdAndUpdate(
  '61a98a48df12e8684ee55e27',
  { name: 'Benito' },
  { new: true }
).then(updatedCat => console.log('GATO ACTUALIZADO', updatedCat));

// DELETE
CatModel.findByIdAndDelete('61a98a48df12e8684ee55e27').then(() =>
  console.log('GATO BORRADO')
);
