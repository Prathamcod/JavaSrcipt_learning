// let i = 0;

// while (i < = 10) {
//   console.log(i);
//   i++;
// }

// let password = "";

// while (password != 1234) {
//   password = prompt("Enter password");
// }
// console.log("Access Granted");

//  Even Number

// let i = 1;
// while (i <= 50) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// reverse number
/* let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
} */

//  sum of number

/* let sum = 0;
let k = 0;

while (k <= 100) {
  sum += k;
  k++;
}
console.log(sum); */

//  mutliply
// let num = 5;
// let i = 1;

// while (i <= 10) {
//   console.log(num + " x " + i + " = " + (num * i));
//   i++;
// }

// User Input Loop
/* let num = prompt("Enter the number:");
let sum = 0;
let i = 0;

while (i < num) {
  sum += i;
  i++;
}
console.log("Total sum of num", sum); */

// password system

/* let password = "";
while (password !== 1234) {
  password = prompt("Enter your password");
}
console.log("access granted"); */

// Guess the number
// let user_num;
// while (true) {
//   user_num = parseInt(prompt("Enter the number"));
//   if (user_num === 7) {
//     alert("True guess");
//     break;
//   } else {
//     alert("False Guess");
//   }
// }

// Factorial Login
// 5 * 4 * 3 * 2 * 1 = 5 fact

// let y = 1;
// let fact_num = 5;
// let fact_res = 1;
// while (y <= fact_num) {
//   console.log((fact_res *= y));
//   y++;
// }

// Prime Number
// let num = prompt("Enter the number to find is prime or not : ");
// let i = 2;
// let isPrime = true;

// while (i < num) {
//   if (num % i == 0) {
//     isPrime = false;
//     break;
//   }
//   i++;
// }
// if (num <= 1) {
//   console.log("num is not prime");
// } else if (isPrime) {
//   console.log("Prime number");
// } else {
//   console.log("num is not prime");
// }

// // reversed number
// let user_num = prompt("Enter the number");
// let reversed = 0;
// let i = 2;

// while (user_num > 0) {
//   let digit = user_num % 10;
//   reversed = reversed * 10 + digit;
//   user_num = Math.floor(user_num / 10);
// }
// alert(reversed);

// nested loop
/* let n = 5;

for (let i = 1; i < n; i++) {
  let row = "";

  for (let j = i; j < n; j++) {
    row += "* ";
  }

  console.log(row);
} */

// let num = 6;

// for (let i = 1; i < num; i++) {
//   let row = " ";
//   for (let j = 1; j < i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// let num = 6;
// for (let i = 1; i < num; i++) {
//   let row = "";
//   for (let j = i; j < num; j++) {
//     row += "  ";
//   }
//   for (let j = 1; j < i + 1; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// let num = 5;

// for (let i = 1; i <= num; i++) {
//   let row = "";

//   // spaces
//   for (let j = 1; j < i; j++) {
//     row += "  ";
//   }

//   // stars
//   for (let j = i; j <= num; j++) {
//     row += "* ";
//   }

//   console.log(row);
// }

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = "";

//   // spaces
//   for (let j = 1; j <= i - 1; j++) {
//     row += " ";
//   }

//   // stars
//   for (let j = 1; j <= 2 * (n - i) + 1; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

let n = 6;
for (let i = 1; i <= n; i++) {
  let row = "";
  //   spacing
  for (let j = i; j <= n; j++) {
    row += "  ";
  }
  //   Star triangle 1
  for (let j = 1; j < i + 1; j++) {
    row += "* ";
  }
  //   traingle 2
  for (let j = 1; j < i; j++) {
    row += "* ";
  }

  console.log(row);
}
