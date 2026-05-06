// const User = {
//   name: "Pratham",
//   age: 22,
//   Gender: "Female",
// };
// User.name = "Bhavik";
// console.log(User);

// let user = new Object();
// user.name = "Elon Musk";
// console.log(user);

// function Student(name, age, marks) {
//   this.name = name;
//   this.age = age;
//   this.marks = marks;
// }

// let s1 = new Student("Pratham", 22, 40);
// let s2 = new Student("Pratham", 22, 40);
// console.log(s1);
// console.log(s2);

// console.log(s1.name);

// console.log(s1["name"]);

// s2.name = "Bhavik";
// console.log(s1.name);

// delete s1.age;
// console.log(s1);

// // object with Function
// let Device = {
//   deviceName: "Hp 14s",
//   memory: "4g ram and 256 ssd",
//   review: function () {
//     console.log("Good" + this.deviceName);
//   },
// };
// console.log(Device.review());

// // looping
// for (let key in Device) {
//   console.log(key, Device[key]);
// }

// // pratice
// let product = {
//   name: "Laptop",
//   price: 50000,
//   isAvaiableProduct: true,
//   qty: 2,
//   totalPrice: function () {
//     return this.price * this.qty;
//   },
//   discount: () => {
//     return (product.price * 20) / 100;
//   },
//   similar: ["assus", "dell", "sumsung"],
// };
// console.log(product.totalPrice());
// console.log(product.discount());
// console.log(product["price"]);
// for (let productData in product) {
//   console.log(productData, product[productData]);
//   if (productData === "similar") {
//     for (let item of product[productData]) {
//       console.log("Similar", item);
//     }
//   }
// }
// for (let brand in product.similar) {
//   console.log(brand);
// }

// const MovieData = {
//   movieName: "Batman",
//   releaseYear: 2011,
//   similar_Movie: [
//     "Avenger",
//     "Superman",
//     "Flash",
//     "EndGame",
//     "Infinity",
//     "X-men",
//   ],
//   genre: ["Action", "Adventure"],
//   movie_class: "hollywood",
//   noOfActors: 50,
//   priceinCinema: 1000,
//   discount: () => {
//     return (MovieData.priceinCinema * 20) / 100;
//   },
// };
// for (let moviedata in MovieData) {
//   console.log(moviedata + " : " + MovieData[moviedata]);
//   if (moviedata === "similar_Movie") {
//     for (let Similar of MovieData.similar_Movie) {
//       console.log("Similar Movie :", Similar);
//     }
//   }
// }

// let person = {};
// person.name = " Bhavik";
// person.age = 22;
// person["Gender"] = "Male";
// console.log(User);
// let UserCont = function (name, age, Gender, isMarried) {
//   this.name = name;
//   this.age = age;
//   this.Gender = Gender;
//   this.isMarried = isMarried;
// };

// let User1 = new UserCont("Pratham", 21, "Male", false);

// console.log(User1);

// let z = undefined;
// console.log(typeof z);

// let obj = {
//   for: 1,
//   return: 2,
// };

// console.log(obj);
// let obj = {
//   0: "test"
// };

// console.log(obj[0]);   // test
// console.log(obj["0"]); // test

// let obj = {
//   test: undefined
// };

// console.log(obj.test);        // undefined
// console.log("test" in obj);   // true ✅

// let obj = {
//   "2": "B",
//   "1": "A",
//   "3": "C"
// };

// for (let key in obj) {
//   console.log(key);
// }

// object reference
// const user = {
//   name: "pratham",
//   age: 21,
// };
// const admin = user;

// console.log("user :", user);
// console.log("admin :", admin);

// admin.name = "Bhavik";
// console.log("user :", user);
// console.log("admin :", admin);

// clone
// const user = {
//   name: "pratham",
//   age: 21,
//   details: {
//     Gender: "male",
//     address: "bhoot bangla",
//   },
// };

// const obj = user;

// console.log(user);
// console.log(obj);
// obj.details.Gender = "Maleee";
// console.log(obj);
// console.log(user);
// const obj = {};

// for (let key in user) {
//   obj[key] = user[key];
// }

// console.log("Obj :", obj);
// console.log("User :", user);

// obj.name = "Elon musk";
// user.name = "Gorgg";
// console.log("Obj :", obj);
// console.log("User :", user);

// obj.details.Gender = "Female";
// console.log("Obj :", obj);
// console.log("User :", user);

// let obj = { ...user };

// // Deep Copy
// let user2 = {
//   name: "pratham",
//   details: {
//     city: "Indore",
//   },
// };

// let clone = structuredClone(user2);

// clone.details.city = "AHMEDABAD";
// console.log("User Obj:", user2);
// console.log("Clone Obj :", clone);

// Object.assign({}, user);

// let user = {
//   name: "Pratham",
//   profile: {
//     age: 21,
//     city: "Ahmedabad",
//   },
// };

// // Deep copy
// let clone = structuredClone(user);

// // change clone
// clone.profile.city = "Mumbai";

// console.log(user.profile.city); // Ahmedabad ✅
// console.log(clone.profile.city); // Mumbai

// const user = {
//   name: "pratham",
//   age: 21,
//   details: function () {
//     console.log("Hello is i am inner function");
//     let username = "PrathamSuthar12";
//     console.log(username);
//   },
// };

// const obj = { ...user };

// // console.log(user);
// // console.log(obj);

// console.log("User", user.details);
// console.log("Obj", obj.details);
// user.details.username = "bhaviksharma";
// console.log("User", user.details);
// console.log("Obj", obj.details);

const faltufunc = function MYFUNC() {
  console.log("function");
};

console.log(typeof faltufunc);
