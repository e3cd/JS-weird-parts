var person = {
  firstname: "John",
  lastname: "Doe",
  getFullName: function() {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
};

var logName = function(lang1, lang2) {
  console.log("Logged: " + this.getFullName());
}.bind(person);

logName();

var logPersonName = logName.bind(person); //points the this variable of logName to the person object. the bind method returns a new fucntion, makes a new copy ofthe logname function, and sets it up so when its EC is created, the JS engine sees it being created with bind, and points the this variable to whatever is passed onto the bind method

logPersonName(); //this refers to the person object

logName.call(person, "en", "es"); //also refers the this variable and pass parameters. Unlike bind, call executes the copy it creates, hence we can pass parameters.

logName.apply(person, ["en", "es"]); //wants an array of arguments, an array can be more useful in terms of numbers.

/**
 * trick the syntax parser into realizing its not a normal function statement, its a funcion expression
 */

(function(lang1, lang2) {
  console.log("Logged: " + this.getFullName());
  console.log("Arguments: " + lang1 + " " + lang2);
  console.log("---------");
}.apply(person, ["en", "es"])); //refers this into person object

//function borrowing

var person2 = {
  firstname: "jane",
  lastname: "doe"
};

//use function borrowing using call or apply

console.log(person.getFullName.apply(person2)); // invoking getFullName from person object but using apply to refer the this variable to the person2 object.

//FUNCTION CURRYING
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
//when the copy of the function is made by bind, setting, giving it parameters sets the permanent values of these. --- variable a will always be 2 in the copy function. Essentially doing this;

// function multipleByTwo(b) {
//   var a = 2;
//   return a * b;
// }

console.log(multipleByTwo(4)); //4 will be the second parameter with 2 being set as the permanent first a value.
