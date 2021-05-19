a=function(){
    console.log("Working")
}

add=function(a,b){
    return a+b;
}

a()
console.log(add(12,34));

x=()=>console.log('x is working')
sum=(a,b)=>a+b;

x()
console.log(sum(12,34))