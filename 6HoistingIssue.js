var name="Shubham"
console.log(name) // Shubham
if (10>1){
    var name="Shubham Bhurke"
}
console.log(name) // Shubham Bhurke
/* In the above code, the variable name is hoisted to the top of the function scope, 
so when we log it inside the if block, it shows the updated value. */

//Result: Shubham
//  Shubham Bhurke

//other example of hoisting
console.log(Id)
var Id=7662882

//Result: undefined