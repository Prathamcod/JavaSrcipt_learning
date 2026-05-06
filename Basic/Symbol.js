// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1 === id2);

// let id = Symbol("email");

// let user = {
//   name: "Pratham",
//   [id]: "prathamsuthar384@gmail.com",
// };

// for (let key in user) {
//   console.log(key, user[key]);
// }
// console.log(user);

// let id = Symbol("id");
// let age = Symbol("age");

// let user = {
//   name: "Pratham",
//   [id]: 101,
//   [age]: 20
// };

// console.log(Object.getOwnPropertySymbols(user));

// let secret = Symbol("secret");

// let obj = {
//   name: "Pratham",
//   [secret]: "hidden data"
// };

// console.log(Object.keys(obj)); // ["name"]

// console.log(Object.getOwnPropertySymbols(obj));
// // [Symbol(secret)]

// const object = {
//   name: "Pratham",
//   age: 21,
//   isMarried: false,
//   Salary: 100000000,
// };

// console.log(Object.values(object));

// console.log(Object.entries(object));

// for (let [key, value] of Object.entries(object)) {
//   console.log(key, value);
// }
// const product = [
//   ["product_name", "Iphone16"],
//   ["age", 21],
// ];

// let obj = Object.fromEntries(product);
// console.log(obj);

// let a = { x: 1 };
// let b = { y: 2 };

// let result = Object.assign({}, a, b);
// console.log(result);

// // Lock object
// let obj1 = {
//   name: "pratham",
// };

// Object.seal(obj1);

// console.log(obj1);

// obj1.name = "Bhavik";
// console.log(obj1);

// Object.freeze(obj1);

// console.log(obj1);

// obj1.name = "Dhruvil";
// console.log(Object.isSealed(obj1)); // true

// let user = {
//   name: "Pratham",
// };

// console.log(user.hasOwnProperty("name"));
// console.log(user.hasOwnProperty("toString"));

// let user = {
//   name: "Pratham",
//   age: 21,

//   toString() {
//     return this.name;
//   },
// };

// console.log(user.toString());

// let obj = {
//   valueOf() {
//     return 30;
//   },
// };

// console.log(obj > 10);

let user = {
  name: "pratham",
  age: 21,
  toString() {
    return this.name;
  },
};
console.log(user.toString());
console.log("name" in user);
