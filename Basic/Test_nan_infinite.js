console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN("str")); // because it is not a number it is string that is why it is true return
console.log(Number.isNaN("str")); //strict check

let a = 10;
console.log(isNaN(a));

let b = NaN;
console.log(typeof NaN);

console.log(NaN == NaN);
// But do we need this function? Can’t we just use the comparison === NaN? Unfortunately not. The value NaN is unique in that it does not equal anything, including itself:

// alert(NaN === NaN); // false

console.log(NaN === NaN);
console.log(Number("123a")); // NaN

// Infinite test

const val = 321324141234341454525324525000;
const val1 = 999 / 0;
console.log(isFinite(val));

console.log(isFinite(val1));
console.log("---------------------------------------------------");
console.log(Infinity == Infinity);
console.log(Infinity == -Infinity);
console.log(Infinity === -Infinity);
console.log("\n");
//  if i add something value in Infinite it return a infinity
console.log(Infinity + Infinity); //infinity
console.log(Infinity - Infinity); // NaN

console.log(Infinity + 1000000000000);
console.log(Infinity * 1000000);

// Comparision to Infinity
console.log(Infinity > 10000000);
console.log(Infinity < 10000000);

console.log(-Infinity < -1000000); //true
console.log(-Infinity > -1000000); //false

console.log(Number.MAX_VALUE * 2);

// type of infinity is number

console.log(typeof Infinity);

const val3 = 10 / 0;
console.log(isFinite(val3));

//  parseInt and parseFloat

// const value1 = parseInt(prompt("ENTER THE VALUE 1"));
// const value2 = parseInt(prompt("ENTER THE VALUE 2"));

// const value3 = value1 + value2;

// console.log(`Total sum of value 1 and value2: ${value3}`);

// const value1 = parseInt(prompt("ENTER THE VALUE 1"));
// const value2 = parseFloat(prompt("ENTER THE VALUE 2"));

// const value3 = value1 + value2;

// console.log(`Total sum of value 1 and value2: ${value3}`);

// const value1 = parseFloat(prompt("ENTER THE VALUE 1"));
// const value2 = parseFloat(prompt("ENTER THE VALUE 2"));

// const value3 = value1 + value2;

// console.log(`Total sum of value 1 and value2: ${value3}`);

// console.log(parseInt("ff", 16));
// //  it ignore the 0x prefix stills work
// console.log(parseInt("0xff", 16));

// console.log(parseInt("1010101", 2));

// console.log(parseInt("3zd4f", 36));

// // Math random

// console.log(Math.floor(Math.random() * 10000));

// console.log(Math.floor(0.56564 * 10));


function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);
