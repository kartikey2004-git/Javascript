class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}


// Maximum call stack size exceed

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);

// both setters and constructor try to set the password , this cause overflow of call stack and call stack size exceeded

// hum idhar properties customize kr skte hai method ki kisko access dena hai , 
// logic check krne ke liye ,
// ki email dena bhi chahiye ya nahi , 
// email kis format mein dena hai , encrypted pasword or decrypted password


