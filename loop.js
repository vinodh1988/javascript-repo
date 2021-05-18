a=10;

 while(a<=100){
   console.log(a)
   a+=10; //a=a+!0
 }
console.log("----------------------------")
 do{
  console.log(a);
  a-=10;
 }while(a>=10);

 console.log("--------------------------------")

 for(let x=10;x<=1000;x+=100)
   console.log(x);

    a=30;
 while(true){
   if(a>50)
     break;
   if(a%3==0){
      a++;
     continue;
   }
   console.log(a++);
 }

 