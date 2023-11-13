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
    favoriteFoods: ["rice"]
   });

   johnDoe.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
   });
};

let arrayOfPeople;

arrayOfPeople = [
  { name: "John Doe", age: 20, favoriteFoods: ["rice"] },
  { name: "Jane Doe", age: 21, favoriteFoods: ["beans"] },
  { name: "Janet Doe", age: 22, favoriteFoods: ["salad"] }
];

var createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    done(null, people);
  });
};
 
const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, person) => {
    if (err) return console.error(err);
    done(null, person);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, uniqueFood) => {
    if (err) return console.error(err);
    done(null, uniqueFood);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, id) => {
      if (err) return console.error(err);
      done(null, id);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);

    person.favoriteFoods.push(foodToAdd);

    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      done(null, updatedPerson);
     });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({ name: personName }, { age: ageToSet }, { new: true }, (err, updatedAge) => {
    if (err) return console.error(err);
    done(null, updatedAge);
  });
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
