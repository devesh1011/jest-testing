const { sum, multiply, myFunction } = require("./main");

test("it adds 1 + 2 to equal 3", testFunction);
test("it multiplies 1 * 2 to equal 2", testFunction2);

function testFunction() {
  expect(sum(1, 2)).toBe(3);
}

// matchers

// toBe matcher
function testFunction2() {
  expect(multiply(1, 2)).toBe(2);
}

//
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => {
  const n = 0;

  expect(n).toBeFalsy();
});

test("1 is truthy", () => {
  const m = 1;
  expect(m).toBeTruthy();
});

test("throws on invalid input", () => {
  expect(() => {
    myFunction("hello");
  }).toThrow();
});
