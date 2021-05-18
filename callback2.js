function dataprocessor(a,b,c){
   console.log("processing",a);
   b({sno:1,name:"Process23"});
   console.log("continuing data processing",a)
   c({item:"Main Item 123"})
   console.log("finished the task")
}

dataprocessor("im here",
function (info){
    console.log("data given",info.sno,info.name)
},
    function (info2){
        console.log("main items",info2.item)



}
)

console.log("LOKESH VERSION")

dataprocessor("Starting",function(obj){
    console.log("ID ",obj.sno,"is",obj.name)
    console.log("contuning.....")
    },
    function(object){
    console.log(object.item)
    console.log("ending.....")
    }
    
    )