var obj={
    id:42,
    counter:function counter(){
    setTimeout(function()
    {
        console.log(this.id);//defined id in the function in setTimeout()
    }.bind(this),1000);
    // Non-binded expression of this in the setTimeout function would be-
    /*
    },1000);
     */
}
}
obj.counter(); // undefined
// The value of this inside the setTimeout function is not the same as the value of this inside the counter method.

/*The Result of this code is nothing/undefined even though id is within the object & the 'this' keyword must point to the id & it's value.
Here the id was defined in another function called counter()*/
// To fix this, we can use an arrow function or bind the context of this to the setTimeout function.