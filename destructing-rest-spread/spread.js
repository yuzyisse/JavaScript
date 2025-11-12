{
    firstName: "Yusra",
    age: 18
}

[
    "Strawberry",
    "Mango",
]

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]

let nums = [10, 20, 30];
let copy = [10, 20, 30];

console.log(nums);
console.log(copy);

const person = {
  name: "Ali",
  age: 20,
  city: "Sydney",
  country: "Australia"
};

const { name, ...info } = person;

console.log(name); // Ali
console.log(info); // { age: 20, city: "Sydney", country: "Australia" }

function multiply(x, y) {
    retun x * y;
}
let numbers = [3, 5]
let result = mutiply(...numbers);
console.log(result);