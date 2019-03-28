// long running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log("finished function");
}

function clickHandler() {
  console.log("click event!"); //last to run as the execution stack must be empty for the function to be called
}

// listen for the click event
document.addEventListener("click", clickHandler);

waitThreeSeconds();
console.log("finished execution");

////ASYNCHRONOUS  ==== more than one at a time

//EVENT QUEUE/LOOP === Full of events, notifications of events that might be happening, when the browser or somewhere outside the JS engine has an event that wants to be notified on, it gets placed onto the queue.

//ex click event -- event queue is looked at by JS when the execution stack becomes empty -- unitl al the code is run line by line.

console.log(3 < 2 < 1); // order of execution; 3 < 2 is false. false < 1 --- false is coerced into 0 ex. Number(false) = 0. Therefore false < 1 becomes 0 < 1 which is true. console.log(3 < 2 < 1) is true.

//true is coerced into 1 when true < 2

// == performs type coercion,
// === is a strictly equality and does not coerce the values

/**
 * 3 === 3 -> true
 * "3" === 3 -> false
 */

//USE TRIPLE EQUALS MOST OF THE TIME, only use double if you are aware of the implications
