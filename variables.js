/*a=20
 a=543
 const p={a:34}
 

function pro(){
     
    var a=350;
    console.log("within pro",a)
}

console.log('outside ',a)
pro();
console.log('outside ',a)
*/
function block(){
    var a=30; //var is a function level variable
      {
          let a=56;
          console.log("inner ", a);
      }
      console.log("outer", a);
}

block();