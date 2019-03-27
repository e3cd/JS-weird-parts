//VARIABLE ENVIRONMENT ==== where the variables live

function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2; //every execution context has its own variable environemnt
  console.log(myVar);
  b();
}

var myVar = 1; //global
console.log(myVar); //global
a();
console.log(myVar); //global

//each of the myVars are sitting in its own execution context
