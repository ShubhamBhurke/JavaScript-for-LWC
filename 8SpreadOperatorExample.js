/* Spread operators are used to expand an array,string & also combining two or more arrays & objects.
    It is denoted by three dots (...) */

//Expanding Strings
var name='Shubham'
console.log(...name) // S h u b h a m
var store=[...name]// ['S', 'h', 'u', 'b', 'h', 'a', 'm']
console.log(store)

//Expanding Arrays
let greet=['Enjoy','your','day']
console.log(...greet) // Enjoy your day
console.log(greet) // ['Enjoy', 'your', 'day']

//Combining Arrays
let arr1=['Salesforce','with','Shubham']
let arr2=['is','fun']
let arr3=[...arr1,...arr2] // ['Salesforce', 'with', 'Shubham', 'is', 'fun']
console.log(arr1+arr2) //Salesforce,with,Shubhamis,fun
console.log(arr3) // ['Salesforce', 'with', 'Shubham', 'is', 'fun']
console.log(...arr3) // ['Salesforce', 'with', 'Shubham', 'is', 'fun']
console.log(...arr3,'and I love it') // ['Salesforce', 'with', 'Shubham', 'is', 'fun', 'and I love it']

//Combining Objects
let obj1={"Name":"Shubham","Age":27}
let obj2={"Name":"Shubhangi","Age":23}
let obj3={...obj1,...obj2} // { Name: 'Shubhangi', Age: 23 }
console.log(obj3) // { Name: 'Shubhangi', Age: 23 } //object 2 overwrites object 1
console.log(obj1) // { Name: 'Shubham', Age: 27 } //object 1 remains unchanged

let obj4={...obj3,"gender":"female"}
console.log(obj4) //{Name: 'Shubhangi', Age: 23, gender: 'female'}

let obj5={...obj4, "Name":"Sarika"}
console.log(obj5) //{Name: 'Sarika', Age: 23, gender: 'female'}
