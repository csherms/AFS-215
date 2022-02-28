const expect = require("chai").expect;

class ArrClass {
  constructor() {
    this.myArr = [];
  }

  addItem(item) {
    this.myArr.push(item);
    return this.myArr;
  }

  printArr() {
    return this.myArr;
  }

  rmvByVal(value) {
    for (let i = 0; i < this.myArr.length; i++) {
      if (this.myArr[i] == value) {
        this.myArr.splice(i, 1);
      }
    }
    return this.myArr;
  }

  searchVorVal(value) {
    let n = this.myArr.includes(value);
    if (n === false) {
      return "Error... Item not found.";
    } else {
      return n;
    }
  }
}

before(function () {
  console.log("Testing started");
});

afterEach(function () {
  console.log("test complete");
});

beforeEach(function () {
  arr1 = new ArrClass();
});

it("expected to add 'hello' to the array", function () {
  expect(arr1.addItem("hello")).to.deep.equal(["hello"]);
});

it("expected to call the array", function () {
  expect(arr1.printArr()).to.deep.equal([]);
});

it("expected to remove specified item from array", function () {
  expect(arr1.rmvByVal("hello")).to.deep.equal([]);
});

it("If exists, return true. If not, provide an error message.", function () {
  expect(arr1.searchVorVal("hello")).to.equal("Error... Item not found.");
});
