emp = {sno:1,name:"rajan",city:"Chennai"}

//const {sno,name,city} = emp;
/*
console.log(emp.sno);
console.log(sno);
console.log(name);
*/
destruct= ({sno:eno,name,city})=>{
    console.log(eno);
    console.log(name);
    console.log(city);
}

destruct(emp);
destruct({sno:2,name:"Kiran",city:"Mumbai"})