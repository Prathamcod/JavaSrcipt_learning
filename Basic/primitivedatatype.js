// let number = 100000000000000000000000000000000000000000000000000000n;
// console.log(number);

// console.log(typeof number);

// let n = 1e10;
// console.log(n);

// let num = 12345e-4;
// console.log(num);

// let num = 0xff;

// console.log(num);
// console.log(typeof num);

// let a = 0b11111111;
// console.log(a); // 255
// console.log(typeof a);

// let num = 200;
// console.log(num.toString(32));
// console.log(num.toString(16));
// console.log(num.toString(2));
// console.log(num.toString(8));

/* let num = 1e6;
console.log(num);

let num1 = 5e3;
console.log(num1);

let num2 = 1e-5;
console.log(num2);

let num3 = 255;
console.log(num3.toString(16));

let num4 = 255;
console.log(num4.toString(2));

let num5 = 1000000;
console.log(num5.toString(36));

 */

console.log(Math.floor(4.9));
console.log(Math.floor(-3.45));

console.log(Math.ceil(4.9));

console.log(Math.ceil(-3.4));

// Maths round

console.log(Math.round(4.4544545454));
// Math.trunc : to remove the decimal value
console.log(Math.trunc(4.9));

//Math.round()
let num4 = Math.floor(Math.random() * 10) + 1;
console.log(num4);

// Math.max() & Math.min()

// console.log(Math.max(10, 20, 5));
// console.log(Math.min(10, 20, 5));

// // Math.pow()

// console.log(Math.pow(2, 4));

// const color = " #FF0000";
// console.log(color.toString(2));

// const binary = 0b110011110;

// console.log(binary.toString(16));
// console.log(binary.toString(8));
// console.log(binary.toString(2));

// //  String

// const str = "Pratham";
// console.log(str.toUpperCase());

// const str1 = "PRATham";
// console.log(str.toLowerCase());

// const decimal = 12.234234432;
// console.log(decimal.toFixed(3));
// console.log(decimal.toFixed(2));

// console.log(typeof 0); // "number"

// console.log(typeof new Number(0)); // "object"!

// //  String to Number Conversion
// const str2 = "12143424";
// let n = Number(str2);
// console.log(typeof str2);
// console.log(typeof n);

// let Empty = null;

// console.log(typeof Empty);

// let str3 = "Hello";

// str3.test = 5;
// console.log(str.test);

// let user = {};

// user.test = 5;

// console.log(user.test);

// let y = 1e10;
// console.log(y);

// let z = 1e-3;
// console.log(z);
// console.log(ty)
// let billion = 1e9;
// console.log(typeof billion);
// console.log(billion);

// console.log(z == billion);
// console.log(z === billion);

const billion = 1e9;

console.log(billion === 1 * 1000000000);
console.log(1.23e6 === 1.23 * 1000000);

const micro = 1e-6;
console.log(typeof micro);
console.log(micro);

console.log(1e-6 === 1 / 1000000);
console.log(1.23e-6 === 1.23 / 1000000);
const micronum = 1.23e-4;
console.log(micronum);

const hexa = 0xff;
console.log(hexa.toString(10)); // decimal
console.log(hexa.toString(36)); // 0 to 9 and A to Z
// console.log(hexa.toString(16)); //hexa

console.log((123456).toString(36)); // 2n9c

// multiply and Divide
// let no =
//   2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n;
// let no = 2e177
// console.log(no);

let no = 2.3434534;
console.log(Math.round(no * 100) / 100);

let digit = 2.23;
console.log(typeof digit);

let num = 12.5;
console.log(num.toFixed(5));

let long = 1e500;
console.log(long);

console.log(0.1 + 0.2 === 0.3);
console.log(1.1 + 1.2 === 2.3);

console.log((0.1).toFixed(20));
console.log((0.2).toFixed(20));

console.log((0.1 + 0.2).toFixed(20));
console.log((0.3).toFixed(20));

console.log((1.1).toFixed(20));
console.log((1.2).toFixed(20));
console.log((1.1 + 1.2).toFixed(20));
console.log((2.3).toFixed(20)); // that is why it is true 2.999999999826 === 2.99999999999826

let sum = 0.1 + 0.2;
console.log(+sum.toFixed(20)); // 0.3

console.log((0.1 * 10 + 0.2 * 10) / 10);

console.log(9999999999999999);

console.log(Number.MAX_SAFE_INTEGER);
