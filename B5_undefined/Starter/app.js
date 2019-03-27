b();
console.log(a);

var a = "Hello World!";

function b() {
  console.log("Called b!");
}

//conceptual aside

//undefined is a special value which js has intenrally which means that the variable hasnt been set

//when var a; is declared, during the creation phase the execution context saw var a and sets up a in memory. If a is not assigned to a value, then in the memory space the value is assigned to an undefined value. if var = a is not declared, then the memory is not set up and therefore the reference uncaught typeerror appears
