/*
reduce takes n input only one output
*/
a=[34535,34,34,34,35,34,56,344,434,34,566,45,45,45,23423434,3,54,363,4,23];

result = a.reduce((a,b)=>a+b)
result2 = a.reduce( (a,b)=> a>b?a:b)
result3 = a.reduce( (a,b)=> a*b);

console.log(result,result2,result3)

function total(a){
    sum=0;
    for(let x of a)
      sum+=x
      return sum;
}

console.log(total(a))