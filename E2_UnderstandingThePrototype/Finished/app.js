var person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function() {
    return this.firstname + " " + this.lastname;
  }
};

var john = {
  firstname: "John",
  lastname: "Doe"
};

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
  firstname: "Jane"
};

jane.__proto__ = person;
console.log(jane.getFullName()); // logs jane default // looks further down the prototype chain for the this.lastname

person.getFormalFullName = function() {
  return this.lastname + ", " + this.firstname;
};

console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());
