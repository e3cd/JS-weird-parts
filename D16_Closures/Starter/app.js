function greet(whattosay) {
  return function(name) {
    console.log(whattosay + " " + name);
  };
}

var sayHi = greet("hi");
sayHi("tony");

//possible because of closures

/**
 * When the code starts we have our global exeuction context. When sayHi = greet hits, it invokes the grret function, new execution context is created. the whattosay argument is sitting in its own variable environment in the greet() execution context. It returns creates and returns a new fucntion object on the fly.
 * After return, greet() pops off the stack. Execution context may be gone but the memory space is still sitting there.
 * In GEC, the sayHi('Tony') is invoked with the function its pointing at. Creating a new execution context. When console.log hits, the JS engine looks up the scope chain to find whattosay. Even tho EC of greet() is gone, the sayHi EC still has the reference to the variables/memory space of its outer environment. Even though the greet() function finished, any FUNCTIONS CREATED INSIDE OF IT when called will still have a reference to that greet() functions memory and it's execution context memory space even though the greet() is not on the execution stack anymore.
 * We can say that the execution context has closed in its outer variables , the variables that it would have reference to anyway. This phenomenon is called a CLOSURE. They just happen. js ENGINE WILL ALWAYS MAKE SURE THAT EACH FUNCTION WILL ALWAYS HAVE ACCESS TO THE VARIABLES IT'S SUPPOSED TO HAVE ACCESS TO, scope is intact.
 */
