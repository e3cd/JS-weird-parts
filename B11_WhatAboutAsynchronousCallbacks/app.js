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
