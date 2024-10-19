// Primitive (call by value changes in copied value)

// 7 types : String , number , boolean , null , undefined , Symbol (value ko unique banane ke liye use hota hai), BigInt 

// Js is dynamically typed 
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);

const bigNumber = 45452646475742n;


// Reference type (Non primitive)

// Array , Objects , Functions

const heroes = ["shaktiman","naagraj","doga"];
let object1 = {
    name: "kartik",
    age:19
}

const myFunc = function (){
    console.log("Hello world");
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof scoreValue)
console.log(myFunc); // returns function or in generally in js usko bola jata hai function object

console.log(id);

// for more study : https://262.ecma-international.org/5.1/#sec-11.4.3