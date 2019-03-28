// OLD WAY OF SETTING DEFAULT VALUES

function greet(name) {
  name = name || "<Your name here>"; //or returns first truthy value
  console.log("Hello " + name);
}

greet("Tony");
greet();
