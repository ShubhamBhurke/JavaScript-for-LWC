//Let's implement an arrow function that does not use any bind experession and displays the value of 'this.id' in the console.
var obj={
    id:42,
    counter:function(){
        setTimeout(()=>{
            console.log(this.id);
        },1000)
    }
}
obj.counter();