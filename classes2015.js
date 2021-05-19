class Student{
      constructor(sno,name){
          this.sno=sno;
          this.name=name;
      }

      display(){
        console.log(this.sno,this.name);   
      }

}


obj1=new Student(1,"Rahul")
obj1.display();
obj2=new Student(2,"Raj")
obj2.display();
