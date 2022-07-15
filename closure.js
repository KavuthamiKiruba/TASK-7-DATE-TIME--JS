var a=20;
{
    a=10
}
console.log(a)

let b=10
{
    b=12
}
console.log(b)

let c=1
{
    let c=3
}
console.log(c)

{
    let d=12
}
console.log(d)

{
    let r=10
    console.log(r)
}
{
 var d=12
}
console.log(d)

   
var d=133
{
   let d=12
   }
   console.log(d)

   let k=22
   {
    let k=12
    console.log(k)
   }
   console.log(k)


   const q=18//global Scope
   {
    const q=90//:Local Scope
    console.log(q)
   }
   console.log(q)

   function tt(){
    var myName="KAvuthami S"
    console.log(myName)
}
       tt()

       
//Lexical Scope

function displayName()
{
    var myName=" "//lexical scope
    return {
        callName(){
            myName="Kiruba"
            console.log(myName)
        },
        callHello(){
         
            console.log("myName")
        }  
}
}
displayName().callName()
displayName().callHello()



var displayName = (function()
{
    var myName=" "//lexical scope
    return {
        callName(){
            myName="Kiruba"
            console.log(myName)
        },
        callHello(){
         
            console.log("myName")
        }  
}
})()

displayName.callName()
displayName.callHello()