// let isAgeValue = true;
// let Result = isAgeValue == true ? "Valid" : "not Valid";

// console.log(Result);

// // Pratice task1
// let isLogin;
// let credential_lock = isLogin == true ? "isLogin" : "is Not Login";
// console.log(credential_lock);

// let Login = true;
// if (Login) {
//   console.log("Welcome to amozon Explore and buy it");
// } else {
//   console.error("you are not Login");
// }

// let age = 40;
// let accessAllow = age > 18 ? "Allowed Access" : "Not Accesss";
// console.log(accessAllow);

// // Student data

// let ageScan = 18;

// let message =
//   ageScan < 3
//     ? "Hi, baby!"
//     : ageScan < 18
//       ? "Hello!"
//       : ageScan < 100
//         ? "Greetings!"
//         : "What an unusual age!";

// alert(message);

// let message;
/* 
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
//  */
// let login = "Director";
// let message =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//       ? "Greetings"
//       : login == ""
//         ? "No login"
//         : "";

// console.log(message);

// let username = prompt("Enter your username");
// let password = prompt("Enter your password");

// let accountStatus = "active";

// if (username === "" || password === "") {
//   alert("Enter Credentials");
// } else if (username !== "Pratham@123") {
//   alert("User not found");
// } else if (password !== "123456") {
//   alert("Password is incorrect");
// } else if (accountStatus === "block") {
//   alert("Your account is blocked");
// } else {
//   alert("Login Successful");
// }

// 🔹 3. Discount Calculator (E-commerce) (task)

// A shopping website gives discounts based on amount:

// If amount < 500 → no discount
// 500–999 → 10% discount
// 1000–1999 → 20% discount
// 2000+ → 30% discount

// let amount = 2000;

// if (amount < 500) {
//   alert("No discount");
// } else if (amount > 500 && amount < 900) {
//   alert("10% discount");
// } else if (amount > 1000 && amount > 1999) {
//   alert("20% discount");
// } else {
//   alert("30% discount");
// }

// 👉 Additional conditions:

// If user is a premium member, add extra 5% discount
// If final amount becomes less than 0 → show "Invalid calculation"

// 👉 Output:

// Final price
// Total discount applied

// let age = 18;

// let result = age > 18 || age < 18 || age == 18;
// console.log(result);

let age = 30;

if (!(age > 14 || age < 90)) {
  console.log(age);
}
