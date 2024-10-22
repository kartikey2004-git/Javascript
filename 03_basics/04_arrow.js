const user = {
  userName: "kartik",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName} , welcome to website`);
    // console.log(this);
  },
};
// this current context ko refer krta hai

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this) // refers to empty object

// asks in interview
// browser ke andar jab engine run krta hai toh global object window object hai

// function chai(){
// let userName = "hitesh"
// console.log(this.userName); // return undefined
// }
// chai()

// const chai = function () {
//     let userName = "hitesh"
//     console.log(this.userName);
// }
// chai()

// arrow function
const chai = () => {
  let userName = "hitesh";
  console.log(this); // {}
};
chai();

// normal function (object)mein this kuch value hold krta
// arrow functions mein {} empty object return krta hai

// explicit return

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// implicit return

// const addTwo = (num1, num2) =>  num1 + num2

// technique used in react
// const addTwo = (num1, num2) =>  (num1 + num2)

// return object in arrow function
const addTwo = (num1, num2) => ({ username: "hitesh" });
console.log(addTwo(3, 4));

const myArr = [2, 5, 8, 9, 6];



// myArr.forEach(() => {})

