// fetch('https://something.com').then().catch().finally()
// new keyword new instances create hojate hai
// queue or bluebird library for functionality like fetch() catch()

// for more documentation

//  https://stackoverflow.com/questions/34960886/are-there-still-reasons-to-use-promise-libraries-like-q-or-bluebird-now-that-we

// Bluebird vs native vs async/await

// https://blog.kuzzle.io/bluebird-vs-native-vs-async/await-state-of-promises-performances-in-2019#:~:text=We%20can%20see%20that%20even,promises%20managed%20with%20async%2Fawait.

// github repo for blubird promise
// https://github.com/petkaantonov/bluebird

// http://bluebirdjs.com/docs/getting-started.html

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls , cryptography , network
    setTimeout(function () {
      console.log("Async task is completed");
      resolve();
    }, 1000);
  });
  
  // direct connection hota hai resolve ka then()
  promiseOne.then(function () {
    console.log("promise consumed");
  });
  
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("async task 2");
      resolve();
    }, 1000);
  }).then(function () {
    console.log("async 2 resolved");
  });
  
  
  const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){},1000)
    resolve({username: "chai",email: "chai@example.com"}) // jyadatar data jo pass hota hua dikhega woh hoga object 
    // array or function bhi ho skte hai
  })
  
  // data consumption
  promiseThree.then(function(user){
    console.log(user)
  })
  
  const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
      let error = true
      if(!error){
        resolve({username: "hitesh", password: "123"})
      }
      else{
        reject('ERROR: SOMETHING WENT WRONG')
      }
    },1000)
  })
  
  // user ayega as parameter in then() method
  // callback hell se kaise avoid kiya jata hai
  // chaining concept upar wale then se jo value return hoke aati hai wo hi chaining mein naye chain mein ayegi
  
  promiseFour
  .then((user) => {
    console.log(user);
    return user.username
  })
  .then((username) => {
    console.log(username)
  })
  .catch(function(error){
    console.log(error)
  }).finally(() => {
    console.log("The promise is either resolved or rejected");
  })
  
  
  const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
      let error = true
      if(!error){
        resolve({username: "javascript", password: "123"})
      }
      else{
        reject('ERROR: JS WENT WRONG')
      }
    },1000)
  })
  
  // gracefully we can't handle errors catch in async-await
  // promise is eventual completion object
  // try catch
  
  async function consumePromiseFive(){
    try {
    const response = await promiseFive
    console.log(response); 
    } catch (error) {
      console.log(error);
    }
  }
  consumePromiseFive()
  
  //Json response
  
  
  
  // async function getAllUsers(){
  //   try {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   // console.log(response);
  //   const data = await response.json() // isko bhi await krana padega // convert data from string to JSON
  //   console.log(data);// promise{<pending>} ayega
  //   } catch (error) {
  //     console.log("E:",error)
  //   } // still  promise{<pending>} ayega
  // }
  // getAllUsers()
  
  // fetch in nodejs environment 
  
  fetch('https://api.github.com/users/hiteshchoudhary') // return response type promise object
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.log(error))
  
  // async await takes time
  // discuss in next lecture
  
  //fetch documentation and vlogs padhne hai video se
  