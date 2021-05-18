/*
  function -- it ll have reusable code 
    it has following parts
      function name
      parameters [optional]
      return type
      definition

      <returntype> functioname(parameters....)
      {
          definition
      }

      but in javascript function definition will not have return type specification but you
      can return values[optional]

      Javascript syntax

      function funname(parameter1,parameter2){
          //definition
          //return statement -not mandatory
      }

*/

function fun(){
   console.log('funny')
}  //function definition

function funnier(){
    console.log("funnier");
    return "hey!! man";
}
fun()
fun()
fun()
a=fun();
b=funnier();

console.log(a,b)

