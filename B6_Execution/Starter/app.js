b();

console.log(a);

var a = "Hello World!";

function b() {
  console.log("Called b!");
}

//execution phase ---- RUNS YOUR CODE LINE BY LINE

//SINGLE-THREADED EXECUTION ==== means one command at a time

//SYNCHRONOUS ==== One at a time and in order

//INVOCATION ==== Running/Calling a function

function b() {}

function a() {
  b();
}

a();

//firstly the global execution context is created, the parser will parse the code and the compiler will interpret the code. This and global object and window will be created and then it will attach these functions to it. Set up the memory space in the creation phase, function b() and function a() will be in memory, and then the code is executed line by line. when a() is invoked, a new execution context is created and place on the EXECUTION STACK. The function a() is placed first on the stack and runs another exectuion context when b() is invoked inside of function a(). When b finishes it gets popped of the stack
