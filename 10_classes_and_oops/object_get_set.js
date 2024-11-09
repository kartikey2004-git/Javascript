const User  = {
    _email : 'h@hc.com',
    _password : "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User)
console.log(tea.email);

// _ defines in the private property and can't access by normal user 

