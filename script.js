const PouchDB = require("pouchdb");

const db = new PouchDB('practice');

db.info().then((info) => {
console.log(info);
})

var doc = {
  _id: "mittens",
  name: "Mittens",
  occupation: "kitten",
  age: 3,
  hobbies: [
    "playing with balls of yarn",
    "chasing laser pointers",
    "lookin' hella cute",
  ],
};
db.put(doc);

db.get("mittens").then(function (doc) {
  console.log(doc);
});



db.get("mittens")
  .then(function (doc) {
    // update their age
    doc.age = 4;
    // put them back
    return db.put(doc);
  })
  .then(function () {
    // fetch mittens again
    return db.get("mittens");
  })
  .then(function (doc) {
    console.log(doc);
  });