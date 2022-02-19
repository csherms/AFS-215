const expect = require("chai").expect;

function conditional(num) {
  if (num % 7 === 0 && num % 3 === 0) {
    return "Good evening!";
  }
  if (typeof num !== "number") {
    return "Please enter a valid number";
  }
  if (num % 7 !== 0 && num % 3 !== 0) {
    return String(num);
  }
  if (num === 7 || num % 7 === 0) {
    return "Good afternoon!";
  }
  if (num === 3 || num % 3 === 0) {
    return "Good morning!";
  }
  if (num === 2) {
    return String(2);
  }
  if (num === 1) {
    return String(1);
  }
}

it('expected to return "1" when passed 1', function () {
  expect(conditional(1)).to.equal("1");
});

it('expected to return "2" when passed 2', function () {
  expect(conditional(2)).to.equal("2");
});

it('expected to return "Good morning!" when passed 3 or a multiple of 3', function () {
  expect(conditional(3)).to.equal("Good morning!");
});

it('expected to return "Good afternoon!" when passed 7 or a multiple of 7', function () {
  expect(conditional(14)).to.equal("Good afternoon!");
});

it('expected to return "Good evening!" when passed a multiple of 3 AND 7', function () {
  expect(conditional(21)).to.equal("Good evening!");
});

it("expected to return the number as a string when passed a value that is not divisible by 3 or 7", function () {
  expect(conditional(8)).to.equal("8");
});

it("expected to return error message when input value is not a number", function () {
  expect(conditional("a")).to.equal("Please enter a valid number");
});
