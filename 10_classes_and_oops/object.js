// javascript ka prototype behaviour

// () => {} ke andar this ka access nhi hota due to prototype behaviour

// new keyword ka access , classes , this keyword  , protoype inheritance woh bhi due to prototype behaviour

// parent ko access krti hai js if nhi mila koi cheez and then granddparent ko access krti hai untill it found null(prototype inheritance)

// function bhi ek object hai

// JavaScript is a prototype-based, automatically adds a prototype property to functions upon creation. This prototype object allows attaching methods and properties, facilitating inheritance for all objects created from the function.

function multiplyBy5(num){
    this.num = num
    return num*5
}

multiplyBy5.power = 2


console.log(multiplyBy5(5));
console.log(multiplyBy5.power); 
console.log(multiplyBy5.prototype);// returns object{}  
// this refers to current context
// by default jo context set hota hai prototype ka woh uss method ka this hai
// prototype kuch internal property bhi deta hai + humare pass context bhi hota hai available

function createUser(username,score){
    this.username =  username 
    this.score = score 
}

createUser.prototype.increment = function(){
    this.score++; // this keyword for giving current context
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createUser("chai",25); 
const tea = new createUser("tea",250); 
// without new keyword cannot read properties of undefined
// but jo extra functionalities humni di hai woh new se ek new instance mein aajayengi 

// js ka inbuilt behaviour hota hai prototype ka , so there is no need to redeclare of prototype

chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

js new keyword ke through constructor function leti hai

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/