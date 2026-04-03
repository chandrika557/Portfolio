const person = {
  //   name: "vedant",
  age: 23,
  location: {
    city: "pune",
    temp: 37,
  },
};

// If we don't have name property in person object then it will set name to 'Anonymous' by  default
const { name = "Anonymous", age } = person;
const { city, temp: temperature } = person.location;
console.log(name, age);
console.log(city, temperature);

const item = ["vedant", 24, "pune"];
const [myName, myAge, myCity] = item;
// const [, , myCity] = item; // this will also work
console.log(item[2]);
