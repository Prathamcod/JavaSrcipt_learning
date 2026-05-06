function createFamily() {
  let man = { name: "John" };
  let woman = { name: "Ann" };

  man.wife = woman;
  woman.husband = man;

  return man;
}

let family = createFamily();