module.exports = class User {
  constructor(name = "John", age = 43, num1 = 2, num2 = 5) {
    this.num1 = num1;
    this.num2 = num2;
    this.name = name;
    this.age = age;
  }

  add() {
    console.log(this.num1 + this.num2);
  }

  sub() {
    console.log(this.num1 - this.num2);
  }

  mul() {
    console.log(this.num1 * this.num2);
  }

  div() {
    console.log(this.num1 / this.num2);
  }

  greetUser() {
    console.log(`Hello ${this.name} you are ${this.age} years old.`);
  }

  getStrVal() {
    let val = String(this.num1) + String(this.num2);
    console.log(val);
  }
};
