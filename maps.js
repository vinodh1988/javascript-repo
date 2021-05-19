/*
   in filter if number of the input values is m and n is the length of number of outputs
  
   always n<=m

   in map if number of inputs is x and number of outputs is y
   always m==n
*/


a = [
    {sno:1, name : "Rahul",city: "Chennai", Gender: 'M'},
    {sno:2, name : "Hariharan",city: "Hyderabad", Gender: 'M'},
    {sno:3, name : "Christiano",city: "Chennai", Gender:'M'},
    {sno:4, name : "Vikas Kumar",city: "Chennai", Gender: 'M'},
    {sno:5, name : "Prema",city: "Jaipur", Gender: 'F'},
    {sno:6, name : "Jose",city: "Hyderabad", Gender: 'M'},
    {sno:7, name : "Raziya",city: "Chandigarh", Gender: 'F'},
    {sno:8, name : "Sreenath",city: "Chennai", Gender: 'M'},
    {sno:9, name : "Jasmine",city: "Pondicherry", Gender: 'F'},
    {sno:10, name : "Krishna",city: "Bhopal", Gender: 'M'},
    {sno:11, name : "Divya",city: "Chennai", Gender: 'F'},
    {sno:12, name : "Lakshman",city: "Chennai", Gender: 'M'},
    {sno:13, name : "Priya",city: "Pune",Gender: 'F'},
    {sno:14, name : "Joe",city: "Chennai", Gender: 'M'},
    {sno:15, name : "Vinay",city: "Delhi",Gender: 'M'},    
]

processed=a.map(x=>x.Gender==='M'?{...x,name: "Mr. "+x.name}: {...x,name: "Miss ."+x.name});

console.log(processed);