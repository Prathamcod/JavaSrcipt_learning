const User = {
  name: "Pratham",
  age: 22,
  Gender: "Female",
};
User.name = "Bhavik";
console.log(User);

let user = new Object();
user.name = "Elon Musk";
console.log(user);

function Student(name, age, marks) {
  this.name = name;
  this.age = age;
  this.marks = marks;
}

let s1 = new Student("Pratham", 22, 40);
let s2 = new Student("Pratham", 22, 40);
console.log(s1);
console.log(s2);

console.log(s1.name);

console.log(s1["name"]);

s2.name = "Bhavik";
console.log(s1.name);

delete s1.age;
console.log(s1);

// object with Function
let Device = {
  deviceName: "Hp 14s",
  memory: "4g ram and 256 ssd",
  review: function () {
    console.log("Good" + this.deviceName);
  },
};
console.log(Device.review());

// looping
for (let key in Device) {
  console.log(key, Device[key]);
}

// pratice
let product = {
  name: "Laptop",
  price: 50000,
  isAvaiableProduct: true,
  qty: 2,
  totalPrice: function () {
    return this.price * this.qty;
  },
  discount: () => {
    return (product.price * 20) / 100;
  },
  similar: ["assus", "dell", "sumsung"],
};
console.log(product.totalPrice());
console.log(product.discount());
console.log(product["price"]);
for (let productData in product) {
  console.log(productData, product[productData]);
  if (productData === "similar") {
    for (let item of product[productData]) {
      console.log("Similar", item);
    }
  }
}
for (let brand in product.similar) {
  console.log(brand);
}

const MovieData = {
  movieName: "Batman",
  releaseYear: 2011,
  similar_Movie: [
    "Avenger",
    "Superman",
    "Flash",
    "EndGame",
    "Infinity",
    "X-men",
  ],
  genre: ["Action", "Adventure"],
  movie_class: "hollywood",
  noOfActors: 50,
  priceinCinema: 1000,
  discount: () => {
    return (MovieData.priceinCinema * 20) / 100;
  },
};
for (let moviedata in MovieData) {
  console.log(moviedata + " : " + MovieData[moviedata]);
  if (moviedata === "similar_Movie") {
    for (let Similar of MovieData.similar_Movie) {
      console.log("Similar Movie :", Similar);
    }
  }
}

let person = {};
person.name = " Bhavik";
person.age = 22;
person["Gender"] = "Male";
console.log(User);
let UserCont = function (name, age, Gender, isMarried) {
  this.name = name;
  this.age = age;
  this.Gender = Gender;
  this.isMarried = isMarried;
};

let User1 = new UserCont("Pratham", 21, "Male", false);

console.log(User1);
