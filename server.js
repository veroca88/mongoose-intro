const mongoose = require('mongoose');

const Cat = require('./models/Cat.model')

//stablish comunication
//first arg: name of our app mongodb://localhost/exampleaApp
//sencond arg: mandatory for production

mongoose
  .connect('mongodb://localhost/cats-app-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

  //create our first cat
  //each thing inside the mongoose is a promise

  Cat.create({
      name: "garfield",
      age: 17,
      color: "orange"
  })
  .then((newlyCreatedCat) => console.log(`Cat successfully created!  ---> ${newlyCreatedCat}`)) //if everything is find
  .catch(err => console.log(`Error while creating a cat: ${err}`));

  // .find() we are always getting array back as a response

Cat.find({
    age: { $gt: 10 } })
    .then(newlyCreatedCat => console.log('Found this cat: ', newlyCreatedCat))
    .catch(err => console.log('Error while getting the cats: ', err))

    // .findById() we are always getting object back as a response

Cat.findById('5d48d51c036739dace0141c8')
.then(foundCat => console.log('Found this cat by their ID: ', foundCat))
.catch(err => console.log('Error while getting the cats: ', err))

// Updating cats in the DB
// ----------------------------------------------------------------------------

Cat.findByIdAndUpdate('5d48d51c036739dace0141c8', {
    $set: { name: 'Sandra', age: 17 }
  })
    .then(updatedCat => console.log('Updated cat: ', updatedCat))
    .catch(err => console.log('Error while updating the cat: ', err));
  
  Cat.updateMany({ name: 'Garfield' }, { $inc: { age: 1 } }) // age = age + 1
    .then(updatedCats => console.log('Updated cats: ', updatedCats))
    .catch(err => console.log('Error while updating cats: ', err));
  
  // Deleting cats from DB
  
  Cat
    // .findByIdAndRemove() works the same as .findByIdAndDelete()
    .findByIdAndDelete('5d48d2676ca362daa1ced681')
    .then(deletedCat => console.log(`Deleted cat with id: ${deletedCat._id}`))
    .catch(err => console.log('Error while deleting one cat: ', err));
  
  Cat.deleteMany({ name: 'Garfield' })
    .then(deletedCats => {
      console.log('deleted: ', deletedCats);
      // deletedCats.forEach(oneCat =>  console.log(`Deleted cat with id: ${oneCat._id}`));
    })
    .catch(err => console.log('Error while deleting one cat: ', err));