//EXPRESSION === a unit of code that results in a value

//function expression

var anonymousGreet = function() {
  console.log("hi");
};
//during the execution phase, when the anonymousGreet function is being invoked it returns the function as an object essentially, it results in a value

anonymousGreet();

///////////////////////////////////////////////////////////////

greet();

function greet() {
  console.log("hi"); //hoisted and stored in memory
}

anonymousGreet();

var anonymousGreet = function() {
  console.log("hi");
}; //function expressions arent hoisted -- only the var is hoisted and not the actual function, so the var is set to undefined at the start

/**
 * During the creation phase, the function declaration is stored as a variable in memory, when the grret() is invoked it can console.log hi because the function is already in memory
 *
 * But when anonymousGreet() is called it should return undefined because anonymousGreet is a function expression with a function set to a variable. During the creation phase it is stored as a variable with undefined before the code gets executed.
 */
