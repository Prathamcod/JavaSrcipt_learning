console.log("Hello from console.log");

var value = 10;
var value = 20;

console.log(value);

{
  let a = 10;
  console.log(a);
}
// console.log(a);

let a = 12;
a = 13;

console.log(b); // undefined
var b = 5;
// // With semicolon
// alert('Hello');
// alert('World');

// // without semicolon
// alert('Hello')
// alert('World')

let var1 = 100;
let var2 = var1;
console.log(var2);

let obj = { x: 1, y: 2 };
let obj2 = obj;
console.log(obj2.x, obj.y);

// Hoisting Concept
console.log(f);
var f = 5;

// Mulit variable
let name = "pratham",
  age = 21,
  message = "Hello Bhavik";

console.log(name, age, message);

// let $ = 1; // declared a variable with the name "$"
// let _ = 2; // and now a variable with the name "_"

// alert($ + _); // 3

/* const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
color = "#9990032";
alert(color); // #FF7F00 */

const name12 = "Pratham";
console.log(name);
let username = name12;
username = "Bhavik";
console.log(username);
