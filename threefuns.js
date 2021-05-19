/*
filter
map
reduce
*/

a = [
    {sno:1, name : "Rahul",city: "Chennai"},
    {sno:2, name : "Hariharan",city: "Hyderabad"},
    {sno:3, name : "Christiano",city: "Chennai"},
    {sno:4, name : "Vikas Kumar",city: "Chennai"},
    {sno:5, name : "Prem",city: "Jaipur"},
    {sno:6, name : "Jose",city: "Hyderabad"},
    {sno:7, name : "Ravi",city: "Chandigarh"},
    {sno:8, name : "Sreenath",city: "Chennai"},
    {sno:9, name : "Johny",city: "Pondicherry"},
    {sno:10, name : "Krishna",city: "Bhopal"},
    {sno:11, name : "Mahesh",city: "Chennai"},
    {sno:12, name : "Lakshman",city: "Chennai"},
    {sno:13, name : "Harry",city: "Pune"},
    {sno:14, name : "Joe",city: "Chennai"},
    {sno:15, name : "Vinay",city: "Delhi"},    
]

result = a.filter((x)=> x.name.length>5 && x.city.length>5 )

list=[34,353,56,34,356346,45,454,6,45,4,6454,45,454,64,66745,45,452343,3434,2321,1212]

dlist =list.filter(x=>x>1000)


console.log(dlist)

console.log(result)

clist = list.filter(function(x){
    return x<1000;
})
console.log(clist)