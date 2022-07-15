// two keyword async and await
//async without wait

async function dH(){
    var a=12
    var result;
    if(a==9){
        result="its correct"
         }
         else{
            result="It's Wrong"
         }
         var res=await result
         return res
        }
        
        dH().then((res)=>{
            console.log(res)
            })
            .catch((err) =>{
                console.log(err)
            })


///async with wait
async function dataHandle1()
{
    var data=await setTimeout(() => {console.log("hello")},5000)
    return data
}
console.log(dataHandle1())
async function dataHandle(){}
dataHandle().then((res)=> {
    console.log(res)
})
.catch((err) => 
{
    console.log(err)
})