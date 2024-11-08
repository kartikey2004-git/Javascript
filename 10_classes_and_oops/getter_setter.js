class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    set password(value){
        this._password =  value;
    }
    get password(){
        return this._password.toUpperCase()
    }
}

// Maximum call stack size exceed

const hitesh = new User("h@hitesh.ai","abc")
console.log(hitesh);

// both setters and constructor try to set the password , this cause overflow of call stack and call stack size exceeded




