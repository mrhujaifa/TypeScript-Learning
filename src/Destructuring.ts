//Object Destructuring

const obj = {
  name: "hello world",
  age: 20,
  target: {
    one: "programmer",
    two: "bestCoder",
    three: "bestProgrammer",
  },
  hobby: "Programmer",
  isAdmin: true,
};

// Destructuring system
const {
  target: { one },
} = obj;

console.log(one);

// Array destructuring
const arr = ["apple", "mango", "orange", "hanny"];

const [foodOne] = arr;

console.log(foodOne);
