function Student(sno,name){
    this.sno=sno;
    this.name=name;
  
}

Student.prototype.display= function(){
    console.log(this.sno,this.name)
}
//Student(1,"Rahul")
obj1=new Student(1,"Rahul")
obj1.display();
obj2=new Student(2,"Raj")
obj2.display();
