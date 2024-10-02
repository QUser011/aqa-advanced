const person = {
  firstName: "Orest",
  LastName: "Boiko",
  age: 99,
};

person.email = "Orest123@test.com";

delete person.age;

console.log(person);
