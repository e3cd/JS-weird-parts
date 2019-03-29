function greet(firstname, lastname, language) {
  language = language || "en"; //old way of setting default parameter, language gets coerced into false, || finds 'en' and language = 'en'

  if (arguments.length === 0) {
    console.log("Missing parameters!");
    console.log("-------------");
    return;
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments); //arguments is an array-like of all the arguments that have been passed into the function ---- WILL BE DEPRECATED
  console.log("arg 0: " + arguments[0]);
  console.log("-------------");
}

greet();
greet("John");
greet("John", "Doe");
greet("John", "Doe", "es");

// in ES6 I can do:  function greet(firstname, ...other)
// and 'other' will be an array that contains the rest of the arguments
