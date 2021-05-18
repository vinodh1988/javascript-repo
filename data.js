/*
  handling various data items in javascript
     There is no datatype associated with variables in javascript
       
     int a=20; no such declarations in javascript

     there is only concept of variable but no datatype for variables
     a variable in javascript can hold any kind of data

     Various kinds of data supported in javascript
       Number
            a=20
            a=20.2
       String 
            a='Peter'
            a="<input type='text'>"
       Boolean
            a=true
            b=false
        array
            a=[23,l23,23,24,"Raj",[2343,34,34]]
*/

a=30
b=43.34
c=true
d="India"
e=[34,34,3546,45,446]

console.log(a,b,c,d,e)

console.log(typeof(a),typeof(b),typeof(c),typeof(d),typeof(e))

console.log(a instanceof Number,b instanceof String ,c  instanceof Boolean ,d instanceof String,e instanceof Array )