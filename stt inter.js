//settimeout and interval

setTimeout(()=>{
    console.log("HAppy")
},3000)

setInterval(() => {
   greet()
}, 5000)
function greet()
{
    console.log("happy 2")
}

//var inter=setInterval(doStuff,2000);
function doStuff(){
    console.log("This is second message")
    
}
//var interval=setInterval(doStuff,2000);
function doStuff(){
    console.log("This is second message")
    clearInterval(interval);    
}

