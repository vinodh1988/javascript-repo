a={
  sno:1,
  name: "Rajan",
  city: "Chennai"  
}

console.log(a);

a.desig="Manager"
a.name="Rahul"
a.age=40

console.log(a);
property="age"
console.log(a["sno"])
console.log(a[property])
console.log(a.city)
//b=a  //it copies reference
b={...a}; //only content is copied
b.country='India';
console.log(b)
console.log(a)

console.log(a == b)

c={...a,continent:"Asia"}
console.log(c)



