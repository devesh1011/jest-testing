function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function myFunction(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid Input");
  }
}

module.exports = { sum, multiply, myFunction };
