//callback,callback hell//es5
//promise//es6
//async and await //es7
//Ecmascript

//Normal function decleariton
function h()
{
  console.log("Kvuthami")
}
h()

//two function


function hi()
{
  console.log("hello")
 greet()
}
function greet(){
  console.log("Hello Everyone")
}
hi()

//return
function hello()
{
    console.log("helloKiruba")
    return "Hello all"
    grt()
}
function grt(){
    console.log("Hello Everyone")
}
console.log(hello() )

//promises concept with function
const hD = new Promise(function(resolve,reject)
{
    var a=1;
    if(a == 2)
    {
        resolve("it's correct")
    }
    else{
        reject("it's error")
    }
})
.then(function(data){   //then call resolve
    console.log(data)
})
.catch(function(err)//catch call reject
{
    console.log(err)
})

//promises concept with arrow key =>
const hS = new Promise((resolve,reject)=>

{
    var a=1;
    if(a == 1)
    {
        resolve("it's correct")
    }
    else{
        reject("it's error")
    }
})
.then((data)=>
{   //then call resolve
    console.log(data)
})
.catch((err)=>{//catch call reject

    console.log(err)
})


