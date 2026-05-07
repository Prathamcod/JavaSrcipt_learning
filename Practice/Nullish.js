console.log(null ?? "Hello");

console.log(undefined ?? 100);

console.log(0 ?? 50);

console.log("" ?? "Default");

console.log(false ?? true);

console.log(NaN ?? 10);

console.log(null ?? undefined ?? "JS");

console.log(undefined ?? null ?? 0);

console.log("Hello" ?? "World");

console.log([] ?? "Empty");

// console.log(null || undefined ?? "JS");

console.log((null || undefined) ?? "JS");

console.log(0 ?? false ?? "Done");

// console.log(undefined ?? 0 || 5); it show the error no parenthsis

console.log((undefined ?? 0) || 5);

console.log(0 || 100);
console.log(0 ?? 100);
