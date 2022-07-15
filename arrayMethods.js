var array=["abi","vishnu","Jimsha"]
console.log(array)

//adding one more array value
console.log(array.concat("Mazhil"))

//other method adding
var a1=array.concat("Mazhil")
console.log(a1)

//push 
array.push('cithu')
console.log(array)

//pop
array.pop()
console.log(array)

//Unshift
array.unshift('cithu')
console.log(array)

//shift
array.shift()
console.log(array)

//reverse
console.log(array.reverse())

//length
console.log(array.length)

//particular
console.log(array[3])
console.log(array[2])
console.log(array[0])
console.log(array[1])

//filter
console.log(array.filter((d) => d=='abi'))

//map
console.log(array.map((d) => d=='abi'))

//find
console.log(array.find((d) => d=='abi'))

//findindex
console.log(array.findIndex((d) => d=='abi'))

//IndexOf
console.log(array.indexOf((d) => d=='abi'))


//typeof
console.log(typeof(array.find((d) => d=='abi')))
console.log(typeof(array.map((d) => d=='abi')))
console.log(typeof(array.filter((d) => d=='abi')))
console.log(typeof(array.findIndex((d) => d=='abi')))
console.log(typeof(array.indexOf((d) => d=='abi')))

//slice-showcase
console.log(array.slice(0,3))
console.log(array.slice(0,-2))

//splice-Delete
console.log(array.splice(0,1))

//sortindex - asending and descending order
var a=[1,2,3]
console.log(a.sort())
console.log(a.sort((a,b) => b-a))


//every
var n=['aa','dd','fff'] 
var m=n.every((d) => d.includes('aa'))
console.log(m)//false


var n=['aa','aa','aa'] 
var m=n.every((d) => d.includes('aa'))
console.log(m)//true

//some
var n=['aa','dd','fff'] 
var m=n.some((d) => d.includes('aa'))
console.log(m)//true


var n=['addd ','dd','fff'] 
var m=n.some((d) => d.includes('aa'))
console.log(m)//false



//Keys

var i=['guru','rahul']
var f=i.keys()
for(var key of f)
{
console.log(key)
}


//entries
var i=['guru','rahul']
var f=i.entries()
for(var key of f)
{
    console.log(key)

}
console.log(key[1])

//Sum of Number

var aa=[32,87,90,86]
var total=0;
for(i=0;i<aa.length;i++)
{
    total+=aa[i]
}
console.log(total)



//''
var ts=aa.reduce((a,cur) => a+cur,'')

console.log(ts)


//null
var ts=aa.reduce((a,cur) => a+cur,null)
console.log(ts)

//[]
var ts=aa.reduce((a,cur) => a+cur,[])
console.log(ts)


//increase
var ts=aa.reduce((a,cur) => a+cur,10)
console.log(ts)






//console.log(n.every('aa'))
//CheckAll Names
//function check(arr,matchVal){
  //  for(var i=0;i<arr.length;i++){
//        if(arr[i]==matchval){
  //          return true
    //    }
      //  return false
    //}
//}
//console.log(check(myData,'aa'))
//