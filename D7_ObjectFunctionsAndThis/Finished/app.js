function a() {
  console.log(this);
  this.newvariable = "hello";
}

var b = function() {
  console.log(this);
};

a();

console.log(newvariable); // not good!

b();

var c = {
  name: "The c object", //property
  log: function() {
    //function inside object is a method
    var self = this; // hack to set this to the c object instead of the global object

    self.name = "Updated c object";
    console.log(self);

    var setname = function(newname) {
      self.name = newname;
    };
    setname("Updated again! The c object");
    console.log(self);
  }
};

c.log();
