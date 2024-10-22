//  Immediately Invoked function expressions (IIFE)


// global scope ke pollution se bachne ke liye and kyuki function mein toh scope bna hi lete hai

// immediately execute hojaye

(function dbConnection(){
    // named IIFE
    console.log(`DB CONNECTED `);
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');


// dbConnection()
// () se ek block bn jata hai uske andar kaam kiya ja skta hai