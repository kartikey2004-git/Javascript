const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
//    console.log(` ${key} shortcut is for ${myObject[key]}`);  
}


const programming = ["js","golang","c++","python"]
for (const key in programming) {
//    console.log(key);
   console.log(programming[key]);
}
// array ki keys 0 se st hoti hai (by default number hoti hai)


// map ek object hota hai js ka toh wo iteratable hota hai for in loop mein



// concept yeh wala puchna hai kisi se (for clear concepts)

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

for (const key in map) {
  console.log(key);
}

