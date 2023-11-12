require('dotenv').config();

const dotenv = require('dotenv');
dotenv.config({ path: 'sample.env'});

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { 
useNewUrlParser: true, useUnifiedTopology: true });

console.log("Hello World");

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: { type: [String] }
});

let Person;

Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  var johnDoe = new Person({ 
    name: "John Doe",
    age: 20,
    favoriteFoods: ["rice", "beans", "salad"]
   });

   johnDoe.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
   });
};

var createManyPeople = (done) => {
  var arrayOfPeople = [
    { name: "John Doe", age: 20, favoriteFoods: ["rice"] },
    { name: "Jane Doe", age: 21, favoriteFoods: ["beans"] },
    { name: "Janet Doe", age: 22, favoriteFoods: ["salad"] }
  ];
  
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    done(null, people);
  });
};

 
const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
