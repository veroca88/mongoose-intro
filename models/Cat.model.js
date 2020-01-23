//Scheme for each object/collection of data base
//when we working with modules (scheme) the rule is the first letter in uppercase and singular Cat.model.js

const mongoose = require('mongoose');

//destructing mongoose
// const {Schema, model} = mongoose

const Schema = mongoose.Schema;

const catSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 30
    },
    color: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    // toys: [] we can leave empty, we can fill with anything
    toys: [
        {
            type: String,
            minlength: 2
        }
    ],
    country: {
        type: String,
        match: /^[A-Z][A-Z]$/
    },
    photoUrl: {
        type: String,
        match: /^https?:\/\//,
        default: "https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg"
    }
});


//Cat.model becomes ----> cats collection
const Cat = mongoose.model('Cat', catSchema);

//destructing mongoose
// const Cat = model('Cat', catSchema);


module.exports = Cat;