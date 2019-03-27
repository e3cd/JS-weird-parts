function b() {
  console.log(myVar); //looks for the outer reference which in this case is the global environment. This is dependent on its lexical environment- the function b() sits on the same lexical scope as function a(), therefore that is why it looks at the global object and not the function a() for myVar
}

function a() {
  var myVar = 2;
  //   console.log(myVar);
  b();
}

var myVar = 1;
a();

/**
 function a() {
	function b() {
		console.log(myVar);
	}

	var myVar = 2;
	b();
}

var myVar = 1;
a(); */

////SCOPE === where a variable is available in your code
