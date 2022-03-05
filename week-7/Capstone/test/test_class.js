const expect = require("chai").expect;

class Capstone {
  constructor() {
    this.myList = [];
  }

  addItem(item) {
    this.myList.push(item);
    return this.myList;
  }

  printList() {
    console.log(this.myList);
  }

  addMultiple(items) {
    for (let i = 0; i < items.length; i++) {
      this.myList.push(items[i]);
    }
    return this.myList;
  }

  rmvFirstItem() {
    this.myList.shift();
    return this.myList;
  }

  rmvLastItem() {
    this.myList.pop();
    return this.myList;
  }

  rmvByVal(value) {
    for (let i = 0; i < this.myList.length; i++) {
      if (this.myList[i] == value) {
        this.myList.splice(i, 1);
      }
    }
    return this.myList;
  }
}

beforeEach(function () {
  t1 = new Capstone();
});

before(function () {
  console.log("Starting tests");
});

beforeEach(function () {
  console.log("testing...");
});

after(function () {
  console.log("Testing complete");
});

it("can can call list", function () {
  return t1;
});

it("can add 1 item", function () {
  expect(t1.addItem("hello")).to.deep.equal(["hello"]);
});

it("can add multiple items", function () {
  expect(t1.addMultiple([4, 5, "anotherVal"])).to.deep.equal([
    4,
    5,
    "anotherVal",
  ]);
});

it("can remove first item", function () {
  t1.addMultiple([{ a: "val1", b: "val2" }, 4, 6, 8]);
  expect(t1.rmvFirstItem()).to.deep.equal([4, 6, 8]);
});

it("can remove last item", function () {
  t1.addMultiple([2, 4, 6, "anotherVal"]);
  expect(t1.rmvLastItem()).to.deep.equal([2, 4, 6]);
});

it("can remove specific item", function () {
  t1.addMultiple([2, 4, true, 8]);
  expect(t1.rmvByVal(true)).to.deep.equal([2, 4, 8]);
});
