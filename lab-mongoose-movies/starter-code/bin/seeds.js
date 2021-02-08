require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose.connect(`mongodb://localhost/celebs`);

const celebrities = [
  {
    name: "Rick Sanchez",
    ocupattion: "Scientist",
    catchPhrase: "wubba lubba dub dub",
  },
  {
    name: "Morty Smith",
    ocupattion: "Student",
    catchPhrase: "Oh Geez",
  },
  {
    name: "Jerry Smith",
    ocupattion: "Unenployed",
    catchPhrase: "I'm a looser",
  },
];

let movies = [
  {
    title: "Star Wars",
    genre: "science fiction",
    plot: " American epic space opera media franchise created by George Lucas.",
  },
  {
    title: "Harry Potter",
    genre: "Fantastic",
    plot:
      "The novels chronicle the lives of a young wizard, Harry Potter an his friends.",
  },
];

// Celebrity.create(celebrities)
//   .then((response) => {
//     console.log(`${response.length} celebrities seeded in the DB`);
//     mongoose.connection.close();
//   })
//   .catch((err) => console.log(`there has been an error:`, err)
// );

Movie.create(movies)
  .then((mov) => {
    console.log(mov);
    mongoose.connection.close();
  })
  .catch((e) => {
    console.log(e);
  });
