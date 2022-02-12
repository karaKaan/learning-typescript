// This declares the type upfront to be number
let id = 5;
// This is the written out version from above. It is redundant to use it this way
// Either declare a value or a :type
// let id: number = 5
console.log("id: ", id);
// Basic Types
let number;
let company;
let isPublished;
// accepts any type
let anyType;
let arr = [];
arr.push(2);
// This is not working because type for the whole array is number
// arr.push('3')
// Tuple
let person;
person = [2, "Tom", true];
// Tuple Array
let employee;
employee = [
  [1, "kaan"],
  [2, "jill"],
  [3, "john"],
];
// Union
let pid;
pid = "this is an id";
pid = 2;
// Enums
var Direction1;
(function (Direction1) {
  Direction1[(Direction1["up"] = 0)] = "up";
  Direction1[(Direction1["down"] = 1)] = "down";
  Direction1[(Direction1["left"] = 2)] = "left";
  Direction1[(Direction1["right"] = 3)] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
  Direction2["up"] = "up";
  Direction2["down"] = "down";
  Direction2["left"] = "left";
  Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
  id: 1,
  name: "John",
};
// Type assertion: tells the compiler to deal with types a different way
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
  return x + y;
}
// Function with no return value
function log(message) {
  console.log(message);
}
log(234);
log("Hello");
const user1 = {
  id: 1,
  name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
  /* properties can have different access rules
    By default they are PUBLIC: call it any where everywhere like kaan.id = 5 will set it to 5
    PROTECTED: Access inside the class or extended version of the class
    PRIVATE: only inside the Class
    */
  id;
  name;
  constructor(id, name) {
    (this.id = id), (this.name = name);
  }
  register() {
    return `${this.name} is now registered.`;
  }
}
const kaan = new Person(1, "Kaan");
// Subclasses
class Employee extends Person {
  position;
  constructor(id, name, position) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(3, "Shawn", "Developer");
// Generics - are used to build reusable components
function getArray(items) {
  return new Array().concat(items);
}
// let numArray = getArray([1,2,3,4 ])
let numArray = getArray([]);
// let strArray = getArray(['brad','john','jill','SHAWN'])
let strArray = getArray([]);
