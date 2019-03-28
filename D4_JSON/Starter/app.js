// json = {
//   firstname: "Mary",
//   isAProgrammer: true
// };

var objectLiteral = {
  firstName: "Mary",
  isAProgrammer: true
};

console.log(JSON.stringify(objectLiteral)); //convert to json

var jsonValue = JSON.parse('{"firstName":"Mary","isAProgrammer":true}'); //convert to object

console.log(jsonValue);
