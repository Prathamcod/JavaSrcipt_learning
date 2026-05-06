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

function User(name) {
  this.name = name;

  this.sayHi = function () {
    console.log("My name is: " + this.name);
  };
}

let john = new User("John");

john.sayHi(); // My name is: John
