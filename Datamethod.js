
//var newObj = new Object()
//newObj.name="Kavuthami S"
//console.log(newObj)

var todayDate=new Date()
console.log(todayDate.toLocaleDateString())

function h(){
    var todayDate=new Date()
 console.log(todayDate.toLocaleTimeString())   
}

setInterval(()=>{
    h()
},200000000)

function h1(){
 console.log(todayDate.toLocaleTimeString())   
}

setInterval(()=>{
    h1 ()
},5000000000)


var date=new Date()
console.log(date.toLocaleDateString());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getMinutes());

console.log(date.getHours());

var weekDays=["sun","mon","tues","wed","thurs","fri","sat"]
var findDay=new Date();
console.log(weekDays[findDay.getDay()])






















