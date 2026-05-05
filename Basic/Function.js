// function EvenOddNum(num) {
//   if (num % 2 == 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }
// let user_num = prompt("Enter the number is Even or Odd: ");
// EvenOddNum(user_num);

// function add(a, b) {
//   return a + b;
// }
// let result = add(3, 4);
// console.log(result);
// // Global scop
// let x = 10;

// function test() {
//   console.log(x);
// }

// test();
// Function Scope
/* function test() {
  let x = 20;
  console.log(x);
}
test();
console.log(x); */

// block scope {}
/* 
if (true) {
  let x = 30;
}
console.log(x); */
// function test() {
//   var x = 10;
//   console.log(x);
// }

/* function Number(x) {
  let x = 10;
  console.log(x);
}
Number(x);

 */

// let b = 10;

// function Number() {
//   let b = 20;
//   let message = "Hello" + b;
//   console.log(message);
// }
// // console.log(a);

// Number();

// console.log(b);

// function test() {
//   var x = 5;
// }
// console.log(x);

// function test() {
//   if (true) {
//     let y = 10;
//   }
//   console.log(y);
// }
// test();

// var x = 10;

// function test() {
//   var x = 20;
//   console.log(x);
// }

// test();
// console.log(x);

// function getText() {
//   return "Generated text";
// }

// function showMessage(from, text = getText()) {
//   console.log(from + ": " + text);
// }

// showMessage("Ann","sgsdgsd");

// function showMovie(age) {
//   if (age < 18) {
//     return;
//   }
//   console.log("Movie shown");
// }

// showMovie(19);

// call back function
function add(a, b) {
  return a + b;
}

function calc(func) {
  return func(10, 20);
}

console.log(calc(add));

//Anonymous Call

function Username(callback) {
  callback("Pratham");
}
Username(function (name) {
  console.log("Hello" + name);
});

const Add = (a, b) => {
  return a + b;
};

console.log(Add(10, 20));

function greet(name, callback) {
  console.log("Hello" + name);
  callback();
}

function sayBe() {
  console.log("Bye ");
}
greet("Pratham", sayBe);

function greet(name, callback) {
  console.log("Hello" + name);
  callback();
}

greet("pratham", () => {
  console.log("Bye");
});


