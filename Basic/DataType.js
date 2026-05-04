/*Datatype : String
           Number
           Boolean
           BigInt
           null
         undefined */
// string
let str = "Pratham(CEO)";

console.log(str);

console.log(`${str} is world richest men`);

let name = "Ilya";

alert(`hello ${1}`); // ?

alert(`hello ${"name"}`); // ?

alert(`hello ${name}`); // ?
// number
let salary = 100000000000; //(100 crore)
console.log(salary);
//  Boolean
let isRetired = false;
console.log(isRetired);
// BigInt
let a = 9007199254740991;
let b = 9007199254740992;

console.log(a === b); // ❌ true (WRONG!)

// let a = 9007199254740991n;
// let b = 9007199254740992n;

// console.log("Bigint", a === b);

console.log(typeof isRetired);

console.log(typeof a);

let val1 = 1231241234124132441234234;

console.log(typeof val1);

let val2 = val1;
val2 = BigInt(val1);

console.log(typeof val2);

console.log(9007199254740992n === 9007199254740993n); // Bigint
// console.log(9007199254740992 === 9007199254740993); true max safe number

let var3 = null;
console.log(var3);

/* // pratice with prompt and confirm
alert("Hello");

let user = prompt("Enter your name:");
let isOk = confirm("Are you Sure");

alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("not a number" / 2 - 1); // NaN
 */
