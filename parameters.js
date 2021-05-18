function callme(a){
    console.log(a);
    console.log("this function is working")
}

function callthis(a,b)
{
    console.log(a,b)
}
callme()  //a will be undefined ...no error
callme(124)
callme("Rahul")
callme([234,3435,34,356,34])
callme({sno:1,name:"Ravi"})
callme(43,345,33)  //extra parameters ignored
callthis(34,341,35,34)
callthis(34)
callthis("ram","Rahim")
callthis([23424,34,343,3],"ray")
