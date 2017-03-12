var add = function(number1 , number2) {
  return number1 + number2;
};
// built in prompt function takes string as argument , returns string for user input.
// prompt collects info unlike alert.
var number1 = parseInt(prompt("Enter a Number"));
// need to add parseInt or else we would get two strings returned concated with one another.
var number2 = parseInt(prompt("Enter another Number"));
var result = add(number1, number2);

alert(result);
