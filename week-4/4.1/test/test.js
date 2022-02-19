const expect = require("chai").expect;

function calculator(a, b, c) {
  if (c === "+") {
    return a + b;
  }
  if (c === "-") {
    return a - b;
  }
  if (c === "*") {
    return a * b;
  }
  if (c === "/") {
    return a / b;
  } else {
    return 'Pleas check all required parameters... Enter 2 numbers and "+, -, *, /" for third argument.';
  }
}

// Testing addition of two numbers
it("addition test", function () {
  expect(calculator(2, 2, "+")).to.equal(4);
});

// Testing subtraction of two numbers
it("subtraction test", function () {
  expect(calculator(2, 2, "-")).to.equal(0);
});

// Testing multiplication of two numbers
it("multiplication test", function () {
  expect(calculator(2, 6, "*")).to.equal(12);
});

// Testing division of two numbers
it("division test", function () {
  expect(calculator(16, 8, "/")).to.equal(2);
});

// Testing error message
it("error message test", function () {
  expect(calculator()).to.equal(
    'Pleas check all required parameters... Enter 2 numbers and "+, -, *, /" for third argument.'
  );
});

// Intentionally failing test
it("intentional fail test", function () {
  expect(calculator()).to.equal(4);
});
