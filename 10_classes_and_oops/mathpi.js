const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter); // value jo hai wo writable hai , wo enumerable hai , wo configureable hai
// and wo implementation hai core js engine ka humare browser mein ya node mein, in  hardcoded c++ mein  

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


// const myNewObj = Object.create(null)

const chai = {
    name: 'ginger',
    price: 250,
    isavailable : true,

    orderChai : function(){
        console.log("chai nhi bani");
    }
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "isavailable"));

Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// to iterate the entries in object
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
} // chai is not iteratable

