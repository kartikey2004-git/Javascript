//  Immediately Invoked function expressions (IIFE)


// global scope ke pollution se bachne ke liye and kyuki function mein toh scope bna hi lete hai

// immediately execute hojaye

(function dbConnection(){
    console.log(`DB CONNECTED `);
})()

// dbConnection()
// () se ek block bn jata hai uske andar kaam kiya ja skta hai