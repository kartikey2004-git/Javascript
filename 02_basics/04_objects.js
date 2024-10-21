const tinderUser = new Object(); // create object as a singelaton

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// // const tinderUser = {} // create object as a non-singelaton
// console.log(tinderUser); // creation of object as constructor

// nested objects can be possible
const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullname: {
      firstName: "hitesh",
      lastName: "choudhary",
    },
  },
};
// console.log(regularUser.fullName.userfullname.firstName);

// optional chaining
// enumerable or repetable same thing

const obj1 = {
  1: "boss",
  2: "kb",
};
const obj2 = {
  3: "bhaichara ",
  4: "hai",
};

const obj5 = {
  5: "bhaichara ",
  6: "hai",
};

// {} acts a target and remaining  are sources

// const obj3 = { obj1, obj2 };
// console.log(obj3);

// const obj4 = Object.assign({}, obj1, obj2, obj5);

// spread operator
const obj4 = { ...obj1, ...obj2, ...obj5 };
// console.log(obj4);

// jab bhi database se values aati hai array object
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // arrays
console.log(Object.values(tinderUser)); // arrays
console.log(Object.entries(tinderUser)); // array ke andar array milta hai

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

