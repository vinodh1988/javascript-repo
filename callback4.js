function taskrunner(userprocess,taskname,nooftimes){
    console.log("initiating ",taskname)
    for(let x=0;x<nooftimes;x++)
      userprocess("process id"+x);
    console.log('finished',taskname);
}

taskrunner(function(data){
    console.log("executing",data);
},
"Documenting",
5)

