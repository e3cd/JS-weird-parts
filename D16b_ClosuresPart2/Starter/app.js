function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }

  return arr;
}

var fs = buildFunctions();

fs[0](); //i = 3
fs[1](); //i = 3
fs[2](); //i = 3

/**
 *In var fs = builfunctions(), buildfUNCTIONS() is executed, EC has i variable and arr variable.
 * The for loop runs and i = 0, pushes function into array, console.log isnt being run because it is a function expression, only object is being created and function is not invoked. i++ means i = 1, another function object is added into array, i = 2, thrid function pushed into array, i++ = i = 3. Exits for loop
 * When return arr is hit, in memory in EC i = 3 and arr holds three function objects.
 * In GEC, buildfunctions pops off, fs[0]() creates EC but not variable i inside code, so it goes up scope chain and finds that i = 3 in the memory reference of buildFunctions().
 *
 *
 */
