class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }

    static createId() {
        return `${parseInt(Math.random() * 10 + 1)}`;
    }
}

const hitesh = new User("hitesh");
console.log(hitesh.createId());

// kayi baar aisi situation hogi jaha pr hum iss method ka access har uss object ko nahi dena chahte hai jo iss class se instanciate hua hai

