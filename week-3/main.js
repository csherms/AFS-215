const User = require("./user");

let user1 = new User();
let user2 = new User("Casey", 32);

user1.greetUser();
user2.greetUser();

// I have defaulted both the num1 and num2 values to 2 and 5 respectively.
// So it will be the same when calling all instances of the User class and it's methods.
user1.getStrVal();
user2.add();
user2.sub();
user2.mul();
user2.div();
