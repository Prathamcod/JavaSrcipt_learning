/* let User = {
  name: "John",
  age: 30,
};

User.sayHi = function () {
  console.log("Hello!");
};

User.sayHi();
//  */

const { use } = require("react");

// // these objects do the same

// user = {
//   sayHi: function() {
//     alert("Hello");
//   }
// };

// // method shorthand looks better, right?
// user = {
//   sayHi() { // same as "sayHi: function(){...}"
//     alert("Hello");
//   }
// };

// let user = {
//   name: "John",
//   sayHi() {
//     console.log(this.name);
//   },
// };

// let fn = user.sayHi;

// fn.call(user);

let user = {
  name: "John",
  sayHi() {
    let arrow = () => {
      console.log(this.name);
    };
    arrow();
  },
};

user.sayHi(); // John
