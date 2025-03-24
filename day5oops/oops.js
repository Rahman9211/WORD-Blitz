// // 1. Creating Objects (Basic)




const person = {
  name: "Rehman",
  age: 25,
  greet: function () {
    console.log(`Hello, my name is + this.name`);
  },
};

person.greet(); // Output: Hello, my name is Rehman



// // 2. Constructor Function




// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     console.log(`Hello, my name is ${this.name}`);
//   };
// }

// const person1 = new Person("Ali", 30);
// person1.greet(); // Output: Hello, my name is Ali




// // 3. ES6 Classes (Modern Way)



// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const person2 = new Person("Ayesha", 22);
// person2.greet(); // Output: Hello, my name is Ayesha





// // 4. Inheritance (Extending a Class)





// class Employee extends Person {
//   constructor(name, age, job) {
//     super(name, age);
//     this.job = job;
//   }

//   work() {
//     console.log(`${this.name} is working as a ${this.job}`);
//   }
// }

// const emp1 = new Employee("Rehman", 28, "Frontend Developer");
// emp1.greet(); // Output: Hello, my name is Rehman
// emp1.work();  // Output: Rehman is working as a Frontend Developer



// // 5. Encapsulation (Private Properties using #)



// class BankAccount {
//   #balance; // Private property

//   constructor(owner, balance) {
//     this.owner = owner;
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//     console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount("Rehman", 1000);
// account.deposit(500); // Deposited 500. New balance: 1500
// console.log(account.getBalance()); // 1500
// // console.log(account.#balance); // Error: Private field cannot be accessed directly



// // 6. Polymorphism (Method Overriding)



// class Animal {
//   speak() {
//     console.log("Animal makes a sound");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Dog barks");
//   }
// }

// const myDog = new Dog();
// myDog.speak(); // Output: Dog barks



// // 7. Abstraction (Hiding Complexity)


// class Vehicle {
//   constructor(type) {
//     this.type = type;
//   }

//   start() {
//     console.log(`${this.type} is starting...`);
//   }
// }

// class Car extends Vehicle {
//   constructor(brand) {
//     super("Car");
//     this.brand = brand;
//   }

//   start() {
//     console.log(`${this.brand} car is starting with key.`);
//   }
// }

// const myCar = new Car("Toyota");
// myCar.start(); // Output: Toyota car is starting with key.
  