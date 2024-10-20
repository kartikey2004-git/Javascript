const marvel_Heroes =["thor","iron-man","spider-man"]
const dc_Heroes =["flash","bat-man","super-man"]

// marvel_Heroes.push(dc_Heroes)
// console.log(marvel_Heroes); // nested array aagya (array ke andar)
// console.log(marvel_Heroes[3][2]);

// arr4 = marvel_Heroes.concat(dc_Heroes) // returns a new array 
// console.log(arr4);

//spread operator
// const all_new_heroes = [...marvel_Heroes,...dc_Heroes] // spread kr rhe all the elements of both array
// console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// data scrapping
console.log(Array.isArray("kartik"))
console.log(Array.from("kartik")) // converted into array

console.log(Array.from({name: "hitesh"})) // gives empty array // interesting cheez 

let score1 = 100;
let score2 = 100;
let score3 = 100;

console.log(Array.of(score1,score2,score3));// returns a new array from set of elements

