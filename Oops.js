//OOPS in JS

//DEFINING OBJECT
// let person = {
//     first_name: "Manik",
//     last_name: "Mukhija",

//     getFunction: function(){
//         return `"The name of the person is ${person.first_name} ${person.last_name}"`
//     },
//     phone_number: {
//         mobile: "12345",
//         landline: "0184"
//     }
// }
// console.log(person.getFunction());
// console.log(person.phone_number.landline);






//INHERITANCE
// class Vehicle{
//     start(){
//         console.log("Vehicle started");
//     }
// }

// class Bike extends Vehicle{
//     ringBell(){
//         console.log("Ring! Ring!");
//     }
// }

// const myBike = new Bike();
// myBike.start();
// myBike.ringBell();





//ENCAPSULATION
// class User {
//   #password = "Secret";
//   getPassword() {
//     return this.#password;
//   }
// }
// const u = new User();
// console.log(u.getPassword());





//POLYMORPHISM
// class Animal {
//   sound() {
//     console.log("Some sound");
//   }
// }
// class Dog extends Animal {
//   sound() {
//     console.log("Bark");
//   }
// }
// new Dog().sound();
