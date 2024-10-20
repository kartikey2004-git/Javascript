// array object
// we also use different type of values in array in js no problem at all..
// js array are resizeable


const myArr = [1,2,3,4,5]
// console.log(myArr[0]);
// array copying ke time pr do tarike hote hai copy ke 
//1.deep copy(do not share the reference)
//2. swallow copy(share the reference)

const myHeroes =["thor","iron-man","spider-man"]

const myArr2 = new Array (1,2,3,4)

// Array methods

// myArr.push(6);// append values at the end of array
// console.log(myArr);
// myArr.pop();//delete from last
// console.log(myArr);

// myArr.unshift(9) // inserting at the start of array 
// console.log(myArr);
// myArr.shift() // delete element from start
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr)
// console.log(newArr);

//  slice , splice 

console.log("A ",myArr);

const myArr1 = myArr.slice(1,3)
console.log(myArr1);

console.log("B ",myArr);

const myArr3 = myArr.splice(1,3) // but it splices out or saara sub array usse nikal hi jata hai from the original array and last index bhi aata hai
console.log(myArr3);
console.log("A ",myArr);