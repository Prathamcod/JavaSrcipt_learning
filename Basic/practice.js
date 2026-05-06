// let user = {
//   name: "John",
//   sayHi() {
//     let arrow = () => {
//       console.log(this.name);
//     };
//     arrow();
//   },
// };

// user.sayHi(); // John

/* function Student(name, age, address, city, state) {
  this.name = name;
  this.age = age;
  this.address = {
    address,
    city,
    state,
  };
}

let std1 = new Student("pratham", 21, "bhoot bangla", "Ahmedabad", "Gujarat");

console.log(std1);
 */

// function User(name) {
//   this.name = name;

//   this.sayHi = function () {
//     console.log("My name is: " + this.name);
//   };
// }

// let john = new User("John");

// john.sayHi(); // My name is: John

// Task 1
const student = {
  name: "pratham",
  age: 21,
  marks: 50,
  city: "Ahmedabad",
};
console.log(student);

// task2
const student1 = {
  name: "pratham",
  sayHi: function () {
    console.log("Hello " + this.name);
  },
};

console.log(student1.sayHi());

// task3
const product = {
  name: "Iphone 16",
  price: 120000,
  qty: 2,
  totalprice: function () {
    const finalamount = this.price * this.qty;
    console.log(finalamount);
  },
};

console.log(product);
console.log(product.totalprice());
