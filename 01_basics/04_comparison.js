// console.log(2>1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);

// console.log(null>0);//false
// console.log(null==0);//false
// console.log(null>=0);//false

// the reason is that equality check == and comparison operator >,<,>=,<=works differently
//comparisons convert null to a number treating it as 0 
// that why null >=0 is true and null > 0 is false

// console.log(undefined==0);//false
// console.log(undefined>0);//false
// console.log(undefined<0);//false


// === strict check 

// console.log("2"===2);//false