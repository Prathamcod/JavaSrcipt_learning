//  Access Property
const car = {
  brand: "Tesla",
  model: "X",
};

console.log(car.brand);
console.log(car["model"]);

//  Update Property
const user = {
  name: "Pratham",
  age: 20,
};

user.age = 25;

console.log(user);
//  Add New Property
const phone = {
  brand: "Apple",
};

phone.price = 1000;

console.log(phone);

//  Delete Property
const obj = {
  a: 1,
  b: 2,
};

delete obj.a;

console.log(obj);

// Object Method
const person = {
  name: "Pratham",

  greet() {
    console.log("Hello " + this.name);
  },
};

person.greet();

//  Bracket Notation
const student = {
  name: "JS",
  age: 22,
};

let key = "name";

console.log(student[key]);

// Nested Object
const user = {
  name: "A",

  address: {
    city: "Ahmedabad",
    pin: 380001,
  },
};

console.log(user.address.city);
//  Loop Through Object
const obj = {
  a: 1,
  b: 2,
};

for (let key in obj) {
  console.log(key, obj[key]);
}

// Object.keys()
const user = {
  name: "JS",
  age: 20,
};

console.log(Object.keys(user));

//  Object.values()
const user = {
  name: "JS",
  age: 20,
};

console.log(Object.values(user));

// Object.entries()
const user = {
  name: "JS",
  age: 20,
};

console.log(Object.entries(user));

//  this Problem
const user = {
  name: "Pratham",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();

// Method Reference
const user = {
  name: "JS",

  greet() {
    console.log(this.name);
  },
};

const x = user.greet;

x();

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  ...obj1,
  c: 3,
};

console.log(obj2);

// Object Comparison
const a = {};
const b = {};

console.log(a === b);

// Reference Behavior
const user1 = {
  name: "JS",
};

const user2 = user1;

user2.name = "Python";

console.log(user1.name);

// Computed Property
let key = "age";

const user = {
  name: "Pratham",
  [key]: 22,
};

console.log(user);

//  Optional Chaining
const user = {
  profile: {
    name: "JS",
  },
};

console.log(user.profile?.name);
console.log(user.address?.city);

// Destructuring
const user = {
  name: "Pratham",
  age: 22,
};

const { name, age } = user;

console.log(name);
console.log(age);
