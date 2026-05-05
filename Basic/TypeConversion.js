let username = "Pratham123@";
console.log(username);

let userNameasNumber = Number(username);
console.log(userNameasNumber);
console.log(typeof userNameasNumber);

let userAge = 32;
let _userAgeasString = String(userAge);
console.log(typeof userAge);

console.log(typeof _userAgeasString);

let userAgeasBoolean = Boolean(userAge);
console.log(userAgeasBoolean);
console.log(typeof userAgeasBoolean);

// Number to Bigint

let amount = 1200;
console.log(amount, typeof amount);

let amountBig = BigInt(amount);
console.log(amountBig, typeof amountBig);
