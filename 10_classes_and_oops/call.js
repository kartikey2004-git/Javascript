function SetUsername(username){
    // complex Db calls
    this.username = username
    console.log("called");
}

function createUser(username,email,password){

    // yaha pr humare pass access hona chahiye username
    // javascript mein kuch inbuilt function milte hai jo ki hum explicitly jaake call kr skte hai

    SetUsername.call(this,username) // this as a parameter for giving current context

    // kyuki yaha pr mujhe uska reference hold krke rkhna hai .call

    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);

