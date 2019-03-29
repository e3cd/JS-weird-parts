function sayHiLater() {
  var greeting = "Hi!";

  setTimeout(function() {
    console.log(greeting);
  }, 2000);
}

function tellMeWhenDone(callback) {
  var a = 1000;
  var b = 2000;

  callback();
}

tellMeWhenDone(function() {
  alert("im done");
});
