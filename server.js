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
      age: 7,
      color: "orange"
  })
  .then((newlyCreatedCat) => console.log(`Cat successfully created!  ---> ${newlyCreatedCat}`)) //if everything is find
  .catch(err => console.log(`Error while creating a cat: ${err}`));