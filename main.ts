//hoisting in javascript

// var a : only var works on hoisting
 console.log(a)
 var a:number  = 5
 console.log(a)

// //const or let do not work
 console.log(b)
 let b:number = 3
 console.log(b)

//proper function works 
add()

function add(){
    console.log("hello world")
}

//arrow function do not work
host()

const host = ()=>{
    console.log("learning hoisting")
}

//function expression do not work 
var greet = function(){
    console.log("hello world") 
}


