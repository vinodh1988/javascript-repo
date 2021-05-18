function outer(a,b){
    let c=30
    function inner(d){
        e=43;
       console.log("processing a and b ",a,b);
       console.log('Accessing c ',c)
       console.log('received d ',d)
    }
    inner(45);
    //console.log(e);
}

outer(43,34);