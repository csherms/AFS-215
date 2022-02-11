module.exports = class MyClass {
  constructor(x) {
    this.x = x;
  }

  testCase() {
    if (this.x % 3 == 0 && this.x % 7 == 0) {
      console.log("Good Evening!");
    } else if (this.x % 7 == 0) {
      console.log("Good Afternoon!");
    } else if (this.x % 3 == 0) {
      console.log("Good Morning!");
    } else if (typeof this.x != "number") {
      console.log("ERROR ---> Please enter a number.");
    } else if (this.x % 3 != 0 && this.x % 7 != 0) {
      console.log("Converting numbe to string ---- " + String(this.x));
    }
  }
};
