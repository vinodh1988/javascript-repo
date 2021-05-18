a=10;
b=20;
c=a++;   
d=++b;
console.log(c);  //10
console.log(a); //11
console.log(d);//21
console.log(b);//21

/*
  a=10;
  b=20;
     c=   a++ + b; //31 wrong
                   //30
                   */