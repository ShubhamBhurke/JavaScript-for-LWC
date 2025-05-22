/*Destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays, 
or properties from objects, into distinct variables.*/
// Example 1: Array Destructuring- old way using index of array.

let arr = [1, 2];
console.log(arr);

var one = arr[0];
var two = arr[1];

console.log(one); // 1
console.log(two); // 2


//Example 2: Array Destructuring- new way using destructuring assignment.
let arr2=[9,10];
console.log(arr2);

var[nine,ten]=arr2; // destructuring assignment
console.log(nine); // 9
console.log(ten); // 10



//Example 3: Object Destructuring- old way using dot notation.
let Student={
    name:"John",
    age:27,
    City:"New York"
};
console.log(Student.name);

let {name, age, City}=Student; // destructuring assignment
console.log(name); // John
console.log(age); // 27
console.log(City); // New York

/*Result-
(2) [1,2]
 1
 2

 (2) [9,10]
 9
 10

{name: 'John', age: 27, City: 'New York'}
John
27
New York
*/