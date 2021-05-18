a=function(){
    console.log("fun is working")
}

a();
b=a;
b();

function temp(){
    console.log("Temp function is running");
}
c=temp;
c();

d=[34,34,556,function(){console.log("Ray Ray Ray")}]
console.log(d)
d[3]()

e={
    sno: 1,
    name: "Rajan",
    display: function(){
        console.log(this.sno,this.name);
    }
}
e.display();