function funny(){
    console.log("I have processed your calle and i ll give on you process it");
    return function(){
        console.log("Processed result in the returned function");
    }
}

a=funny();
a();
console.log("---------------------------------------------------")
funny()();