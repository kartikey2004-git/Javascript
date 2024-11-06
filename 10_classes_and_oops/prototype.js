// let myName = "hitesh      "
// let mychannel = "chai         "

// // console.log(myName,length);
// //  console.log(myName.trim().length);

// console.log(myName.truelength()); // instead of trim



let myHeroes  = ["thor","venom","hulk"]

let heroPower = {
    thor: "hammer",
    venom: "symbiote",
    hulk: "natural",

    getThorPower: function(){
        console.log(`Thor power is ${this.thor}`);
    }
}

// top level object ki heirachy access krli usne saare type ke objects cover krliye like functions , arrays , strings

// factory functions like create ye sab
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.kartik = function(){
    console.log(`Hitesh says hello`);
}

// myHeroes.hitesh()
// heroPower.hitesh()

myHeroes.kartik() // ispr toh access hai prototype built function ka


// heroPower.kartik() // ispr access nhi hai prototype function ka



// Inheritance in JS

const user = {
    username: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

// har object apne aap mein ek alag instance hai, sabke pass alag alag properties hai , but object ki inbuilt toh sabke pass hai

const TAsupport = {
    makeAsssignment : "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = user
// teacher bhi user ki saari property inherit kr skta hai
// prototype inheritances


// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "chai aur code     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea   ".trueLength()

