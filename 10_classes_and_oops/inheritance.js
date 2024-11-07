class User{
    constructor(username){
        this.username = username
    }

    logMe(){
      console.log(`User name is ${this.username}`);
    }
}

// user ko alumnis ya ecommerce bna rhe hai , toh kabhi user ko admin bna rhe hai ya kabhi is use ko student banana padega ya kabhi isse teacher banana padega 

// keywords extend se inheritance prototypical behaviour
// super keyword extended class se constructor ki property aa jati hai


class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@teacher.com","123")
// chai.addCourse()
chai.logMe(); // yaha pr logMe function available hai

const masalaChai = new User("kartik")
// masalaChai.addCourse() 
// ye jo addcourse() constructor hai iska access nahi hai

masalaChai.logMe() // yaha pr logMe function available hai

console.log(chai == masalaChai); // false 
console.log(chai == Teacher);  // false
console.log(chai instanceof Teacher);  // true
console.log(chai instanceof User); // true

// obvious se baat hai uska ek instance leke aaye hai