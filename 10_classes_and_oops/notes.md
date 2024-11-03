# javascript and classes

Yes, JavaScript does have classes, though they are more of a syntactic sugar over its existing 

prototype-based 

inheritance system.

JavaScript has always used prototypes to define objects and inheritance, and classes were introduced in ECMAScript 2015 (ES6) as a more familiar and clearer syntax for working with prototypes. This was meant to make JavaScript object-oriented code more readable and intuitive, especially for developers coming from class-based languages like Java or Python.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance of the Person class
const person1 = new Person('Alice', 25);
person1.greet();  // Output: Hello, my name is Alice and I am 25 years old.
```

Key Points:
Classes in JavaScript use the class keyword.
The constructor method is used for initialization.
You can define methods like greet inside the class body.
Inheritance is supported using the extends keyword. For example:

```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);  // Calls the parent class's constructor
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

const student1 = new Student('Bob', 20, '10th');
student1.greet();  // Inherits the greet method from Person
student1.study();  // Output: Bob is studying in grade 10th.


## OOP is a programming paradigm ( is a set of concepts and styles that define how programmers think about and structure their code.) 

## Object 
-Collection of properties and methods
-toLowerCase


## why use OOP
Spaghetti code is a term used to describe computer source code that is difficult to understand and maintain due to its unstructured and tangled control structure

object literal {}


-Constructor function
-Prototypes
-Classes
-Instances(new,this)


## 4 pillars(ye padhne hai)

Abstraction(details hide krlena)

Encapsulation(basically wrap up krdeta hai data ka,and jo  functions ya variable ya object humein access krdene chahiye wo hum access kr pa rhe hai and restrict bhi krdeta hai)

Inheritance
Polymorphism



In Object-Oriented Programming (OOP), JavaScript, like many other OOP languages, supports key concepts that help in structuring code in a more organized and reusable manner. Here’s a detailed explanation of Abstraction, Encapsulation, Inheritance, and Polymorphism in the context of OOP in JavaScript:

1. Abstraction
Abstraction refers to the concept of hiding the complex implementation details of a feature or function and exposing only the necessary and relevant parts. In other words, abstraction allows users to interact with an object without needing to know how it works internally.

In JavaScript, abstraction is typically achieved by defining classes and using methods to interact with objects. The implementation details of these methods are hidden from the user of the class.

javascript
Copy code
// Example of Abstraction

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    // Abstracting complex behavior behind methods
    startEngine() {
        console.log(`${this.model} engine started`);
    }

    stopEngine() {
        console.log(`${this.model} engine stopped`);
    }
}

const myCar = new Car('Toyota', 2021);
myCar.startEngine(); // We do not need to know how the engine works, just that we can start it.
myCar.stopEngine();
Here, the complexity of starting and stopping the engine is hidden from the user. The user just needs to call the startEngine() or stopEngine() method without needing to understand how the engine works internally.

2. Encapsulation
Encapsulation is the practice of bundling data (variables) and methods (functions) that operate on that data into a single unit or class, and restricting direct access to some of the object's components. This is done to protect the data from outside interference and misuse.

In JavaScript, encapsulation can be achieved using the # symbol (private class fields) and getters/setters to control the access to class members.

javascript
Copy code
// Example of Encapsulation

class Person {
    #name; // Private field

    constructor(name, age) {
        this.#name = name; // Using private field
        this.age = age; // Public field
    }

    // Getter for the private name field
    getName() {
        return this.#name;
    }

    // Setter for the private name field
    setName(name) {
        this.#name = name;
    }
}

const person1 = new Person('Alice', 30);
console.log(person1.getName()); // Access the private field using a getter

person1.setName('Bob'); // Set the private field using a setter
console.log(person1.getName());
In this example, the field #name is private, meaning it can only be accessed or modified through the getter and setter methods. This ensures that the field cannot be changed or accessed directly from outside the class.

3. Inheritance
Inheritance allows one class (the child class or subclass) to inherit the properties and methods of another class (the parent class or superclass). This promotes code reuse and establishes a relationship between classes.

In JavaScript, inheritance is achieved using the extends keyword, allowing one class to inherit from another.

javascript
Copy code
// Example of Inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Dog class inherits from Animal class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class's constructor
        this.breed = breed;
    }

    // Overriding the speak method
    speak() {
        console.log(`${this.name}, a ${this.breed}, barks.`);
    }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); // Buddy, a Golden Retriever, barks.
In this example, the Dog class inherits from the Animal class and overrides the speak() method to provide its own implementation. This allows Dog to reuse the functionality of Animal but also add or modify behavior as needed.

4. Polymorphism
Polymorphism allows objects of different classes to be treated as objects of a common superclass. It also allows for different classes to define methods that have the same name but behave differently. This concept is often achieved by method overriding in JavaScript.

javascript
Copy code
// Example of Polymorphism

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

function makeAnimalSpeak(animal) {
    animal.speak(); // We don't need to know the specific type, just that it has a speak method
}

const dog = new Dog('Max');
const cat = new Cat('Whiskers');

makeAnimalSpeak(dog); // Max barks.
makeAnimalSpeak(cat); // Whiskers meows.
In this example, both Dog and Cat inherit from the Animal class but implement their own versions of the speak() method. The makeAnimalSpeak() function treats both objects as animals, allowing polymorphic behavior, meaning the appropriate speak() method is called depending on the actual object type (Dog or Cat).

Conclusion
In summary, these are the four core principles of Object-Oriented Programming:

Abstraction simplifies complex realities by exposing only essential features.
Encapsulation protects and restricts access to the internal details of an object.
Inheritance allows a class to inherit features from another class, promoting code reuse.
Polymorphism provides a way to use a single interface to represent different data types, enabling dynamic method invocation.
JavaScript’s object-oriented features support these principles, making it easier to organize, maintain, and scale code effectively.
