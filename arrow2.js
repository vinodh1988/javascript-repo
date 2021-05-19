power=function(a,b){
    return a**b
}

square=function(a){
    return a*a
}

splitlength=function(a){
    return a.split(" ").length
}

sum=function(a){
    result=0;
    for(let x of a)
      result+=x
    return result
}

console.log(power(2,3))
console.log(square(2))
console.log(splitlength("this is me and this is my code"));
console.log(sum([34,34,534,3,34]))