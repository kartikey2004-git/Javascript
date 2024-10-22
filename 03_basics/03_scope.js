// var c = 300;

// scope in js // if ke  jo bhi andar hai wo block scope hai
let a = 300
if (true) {
  let a = 10;
  const b = 20;
  console.log("INNER :",a)
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];   
}


console.log(a);
// console.log(b);
// console.log(c);

// global scope ki priority jyada hoti hai program mein , but scope mein local var ki jyada hoti hai priority 

// console mein jo scope check krte hai wo alag hai
// through node environment scope alag hota hai