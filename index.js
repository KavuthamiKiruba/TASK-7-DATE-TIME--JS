//string Method
var username="The Kavuthami S"
console.log(username.length)//11
var firstname="Kavuthami"
var lastname="S"
//Array Method
console.log(username.startsWith('The'))//True
console.log(username.startsWith('Tha'))//false

//email always lower case
var email="Kavuthamikiruba@Gmail.com"
console.log(email.toLowerCase())
console.log(email.toUpperCase())
console.log(firstname.concat(lastname)) // Instead of add we give concat method so KavuthamiS
console.log(firstname.split(",")) // Kavuthami
console.log(username.split(",")) //The Kavuthami S
console.log(lastname.split(",")) //S
var data=username.split(" ")
console.log(data)//'The' 'Kavuthami' 'S'
console.log(typeof(data))//Object
console.log(data.join("||"))//The||Kavuthami||S
console.log(data.join(" "))//The Kavuthami S
console.log(typeof(data.join(" ")))//String

//Without JAva Script Take the firstname adn var first are predefined
var myFirstName=""
for(var i=4;i <= username.length - 2;i++)
{
    myFirstName += username[i] 
    }
    console.log(myFirstName)//Kavuthami

    //VAr not predefined
    var myFirstName=""
    for(var i=4;i<=username.length-2;i++)
    {
        console.log(i)//4,5,6,7,...13
        myFirstName += username[i]//myFirstName=myFirstName+username[i]
        myFirstName.concat(username[i])
    }
    console.log(myFirstName)//Kavuthami
    console.log(myFirstName.concat(username[i]))//Kavuthami S

    //Slice Method or for loop
    console.log(username.slice(4,13))//Kavuthami

//Webshine Method
function webshineSlice(start,end){
    var myFirstName=""
    for(var i=start;i<=end;i++)
    {
        myFirstName += username[i]
    }
    return myFirstName
}
console.log(webshineSlice(4,13))//Kavuthami

//with Username
function webshineSlice(myUser,start,end){
    var myFirstName="kavuthami"
    for(var i=start;i<=end;i++)
    {
        myFirstName += username[i]
    }
    return myFirstName
}
console.log(webshineSlice(username,4,12))//Kavuthami


//Reverse Method for Numbers
 var username1="Kiruba"
for(var i=username1.length-1;i>=0;i--)
{
    console.log(i)//4,3,2,1
 
}


//Reversed method for NAMES
var username1="Kiruba"
var reversedUsername1=""
for( var i=username1.length-1;i>=0;i--){
reversedUsername1 += username1[i]
}
console.log(reversedUsername1)//aburiK

//reverse using slice method
console.log(username1.slice())

//split method
var username2="sudha"
console.log(username2.split(""))//'s','u','d','h','a'

//split and reverse method 
console.log(username2.split("").reverse())//'a','h','d','u','s'

//split ,reverse and join
console.log(username2.split("").reverse().join(" "))//adhus

//trim-remove extra spaces

console.log("   sdsdfghdfh asujdsalk       ")//   sdsdfghdfh asujdsalk       
console.log("   sdsdfghdfh asujdsalk       ".length)//30
var trimExample="   sdsdfghdfh asujdsalk       "
console.log(trimExample.trim())//sdsdfghdfh asujdsalk
console.log(trimExample.trim().length)//20

//Substitng end value not print
var username2="The Rajam"
console.log(username2.substring(3,7))//  Raj

//Replace
var username2Replace=username2.replace('The' ,'Hello')
console.log(username2Replace)//Hello Rajam

//IndexOf
function webshineSlice(myUser,start,end){
    var myFirstName="kavuthami"
    for(var i=username.indexOf('h');i<=end;i++)
    {
        myFirstName += username[i]
    }
    return myFirstName
}
console.log(username.indexOf("e"))//3

//includes

var quotes="Hi Everyone is there"
console.log(quotes.includes('there'))
console.log(quotes.includes('thess'))

//Replace all
var myQueryData="Kavuthami is working as a Freelancer"
console.log(myQueryData)//Kavuthami is working as a Freelancer
console.log(myQueryData.replaceAll("Freelancer","Aptitude Trainer"))//Kavuthami is working as a Aptitude Trainer


//
var n=10
console.log(typeof(n))//number

var num="10"
console.log(typeof(num))//string

var num1=750;
var convertNum=num1.toString()
console.log(typeof(convertNum))//num to string//(string)

var num2=10
var convertNum1=String(num2)
console.log(typeof(convertNum1))//string

//string to number
var n1="123"
var convertn1=Number(n1)
console.log(typeof(convertn1))//Number


