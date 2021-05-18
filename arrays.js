a=[23,2423,"Rahul",true,234,232,233.23,[4343,4343,343,343,[534,343,222]]]

//a[90]=435;
console.log(a.length)
//console.log(a[2309])
console.log(a[7][2])
console.log(a[7][4][2])

for(let x in a)
   console.log(x,a[x])

   console.log("------------------------------------")

 for(let x of a)
    console.log(x)