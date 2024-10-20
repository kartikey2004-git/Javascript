const Name = "kartikey"
const repoCount = 8

// console.log(Name + "Value" + repoCount);

// string interpolation by ``

console.log(`Hello myName is ${Name} and my repo count is ${repoCount}`)

// object used krte hai js ke syntax mein
// string ek object hai
const gameName = new String('kartik-bhatnagar')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

// we can pass negative vaues as start or end in slice
const anotherString = gameName.slice(2,5)
console.log(anotherString);

const newString1 = "    kartik    "
console.log(newString1)
console.log(newString1.trim());

// space change into url encoding mein
const url = "https://www.google.com/hitesh%20chaudhary"

str3 = url.replace('%20','-');
console.log(str3);

console.log(url.includes('boy'));

console.log(gameName.split('-'));

