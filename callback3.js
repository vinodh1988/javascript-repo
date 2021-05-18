function callthisone(a,b){
    console.log("doing the task",a)
    x=b('engine 123')
    console.log('engine 123 result is', x)
}

callthisone("Process1234",function(one){
    console.log("starting the",one);
    return "started";
    });

