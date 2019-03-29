function makeGreeting(language) {
  return function(firstname, lastname) {
    if (language === "en") {
      console.log(`Hello ${firstname} ${lastname} `);
    } else if (language === "es") {
      console.log(`Hola ${firstname} ${lastname} `);
    } else {
      console.log("asdf");
    }
  };
}

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");

greetEnglish("John", "Doe");
greetSpanish("John", "Doe");

/**
 * GEC creates the this variable and the global object variable. Allocates greetEnglish, greetSpanish and makeGreeting
 *
 * When greetEnglish is executed, it calls or executes makeGreeting(). makeGreeting() gets its own EC and language is passed. In language variable environment inside makeGreeting EC, language variable is 'en'.
 *
 * Returns a function which is stored in greetEnglish, makeGreeting pops off. Memory space for this EC is still existent
 *
 * greetSpanish calls makeGreeting() again, new EC for makeGreeting() which has its own VE and language is 'es', returns a function object and finsishes. Two memory EC'S.
 *
 * calling greetEnglish('john', 'doe) calls the function that was returned. creates new EC wth john and doe. Points to the greetEnglish memory EC. This is where the closure is.
 *
 * greetSpanish points to greetSpanish EC with its own closure.
 *
 * KEY - EVERYTIME YOU CALL A FUNCTION IT GETS ITS OWN EC, AND ANY FUNCTIONS CREATED INSIDE OF THE FUNCTION WILL POINT TO THAT EC, pointing to the memory space as if it hadnt dissappeared.
 *
 */
