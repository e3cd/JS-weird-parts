function a() {
  console.log(this); //this points to the global object variable === window
}

var c = {
  name: "The c object", //property
  log: function() {
    //method
    console.log(this);
  }
};
