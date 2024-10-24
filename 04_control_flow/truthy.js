const userEmail = []; 

// string as true or truthy value
// empty string as falsy value
// empty array as true value

if (userEmail) {  
  console.log("Got user email");
} 
else {
  console.log("Don't have user email");
}

// falsy values

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values
// "0" , 'false' , " " , [] , {} , function(){}


// detect array is empty or not

// if (userEmail.length===0){
//    console.log("array is empty");
// }


// detect object is empty or not
const emptyObj = {}

// array bnke aajata hai keys ka
if (Object.keys(emptyObj).length === 0 ) {
  console.log("object is empty");
} 



// const obj1 = {
//   key1 : "kartik",
//   key2 : 23
// }
// console.log(Object.keys(obj1));


// some statements of general knowledge

// false == 0 (returns true)
// false == ''  (returns true)
// 0 == '' (returns true)