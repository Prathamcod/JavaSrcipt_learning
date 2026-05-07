// Logical Operators
// && and || and !
//  return first falsy value return ke hai (false , 0 , -0 , 0n , null , undefined)
console.log("2" && null);
console.log("3" && 3 && undefined);
console.log(0 && "0");
console.log(0 && "Hello" & "");
console.log(false && true && 1);
console.log(0 && false && -0);

//  return first true value
console.log(2 || "Hello");
console.log(-1 || 0);
console.log("" || undefined);

// mixed
console.log(1 && 2); // 2

console.log(0 || 5); // 5

console.log("Hello" && "World"); //"World"

console.log("" || "JS"); //"JS"

console.log(!0); //TRUE

console.log(!"Hi"); // false

console.log(10 && 0 && 5); //0

console.log(null || undefined || "Done"); //"Done"

console.log("A" && "" && "B"); // ""

console.log("A" || "" || "B"); //"A"

console.log(false || 0 || "" || "Hello"); // "Hello"

console.log(true && 1 && "JS"); // "jS"

console.log(undefined && "Test"); // undefined

console.log(NaN || "Fallback"); //"Fallback"

console.log([] && {} && 0); //0

console.log([] || {} || 0); //[]

console.log((" " && 0) || "Done"); // "Done"

console.log(!("Hello" && 0)); // TRUE

console.log(null || 0 || false || "" || "End"); //END
console.log((1 && 2) || (0 && 5)); //

console.log(!!"Hello"); //TRUE
console.log(!!0); //FALSE
