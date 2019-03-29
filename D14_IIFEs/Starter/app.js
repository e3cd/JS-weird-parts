//statement

function greet(name) {
  console.log("Hello " + name);
}
greet();

//expression

var greetFunc = function(name) {
  console.log("Hello" + name);
};

greetFunc("john");

//iife

(function(name) {
  return `Hello ${name}`;
})("Bobo");

console.log(greeting);
