console.log('Hello from JS...')


// Printing in JS
// 1. Error
console.error('This is an error')
console.warn('This is an warning')
console.log('Normal Message')



// primtive data types
// let marks = 450         
// let first = 'John'       
// let isCool = false      
// let x = {name: "Manik", age: 25}            
// let y = undefined

// Type of --> tyepof operator
// console.log(typeof marks)
// console.log(typeof first)
// console.log(typeof isCool)
// console.log(typeof x)
// console.log(typeof y)

// console.log(first.toUpperCase())
// console.log(first.toLowerCase())




// ARRAYS AND ITS METHODS
// const myArray = new Array(50, 100, 150, 200, 250)
// myArray[6] = 300
// console.log(myArray)
// console.log(myArray)
// console.log('Value at index 2 is ', myArray[2])


// myArray.push(500)
// myArray.push(550)
// console.log(myArray)

// myArray.pop()
// console.log(myArray)




//  ARRAYS ARE REFERENCE TYPES

// const newArray1 = [10, 20, 30, 40, 50]
// const newArray2 = [ ...newArray1 ]                        //Spread operator used

// newArray2.pop()
// console.log(newArray1)
// console.log(newArray2)

// newArray1.splice(2,1)
// console.log(newArray1)




// SPLICE
// const arr = [10, 20, 30, 40, 50, 60]
// console.log(arr)

// case 1
// arr.splice(0, 2)
// console.log(arr)

// case 2 -
// arr.splice(1, 2)
// console.log(arr)

// case 3 - 
// arr.splice(1, 3, "Apple", "Mango", "Banana", "Grapes")
// console.log(arr)




// FUNCTION 1 

// function sum(a, b) {
//     return a+b
// }

// const ans1 = sum(10, 20)
// const ans2 = sum('Hello', ' World')
// console.log(ans1)
// console.log(ans2)




// FUNCTION 2 (Declaration)
// function greet(name) {
//   return "Hello, " + name;
// }
// console.log(greet("Manik"));




// FUNCTION 3 (Arrow Functions)
// const greet = (name) => 'Hello, ${name}';
// console.log(greet("john"));





// ES6 => Functions
// const addAndSquare = (num1, num2) => {
//     if(typeof num1 == 'number' && typeof num2 == 'number') {
//         const sum = num1 + num2
//         return sum * sum
//     } else {
//         return 'NOT POSSIBLE'
//     }   
// }
// console.log(addAndSquare(10, 10));




// Without this keyword , Arrow functions
// const add = (a, b) => a+b  
// console.log(add(10, 10));



// const add = (a, b) => typeof a === 'number' && typeof b === 'number' ? console.log(a+b) : console.log('NOT POSSIBLE')
// add(10, 10);





// COMPARISON OPERATOR
// let a = 100
// a = "Arun"
// console.log(typeof a)

// if(100 === '100') {
//     console.log('POSSIBLE')
// } else {
//     console.log('NOT POSSIBLE')
// }





// OBJECTS - 
// 1. Object Constructor
// const myUser = new Object()
// myUser.name = 'Harry Potter'
// myUser.email = 'harrypotter@hogwards.edu.uk',
// myUser.hobbies = ['Getting in trouble', 'Doing Magic']

// 2. Using { }
// const myUser = {
//     name:'Harry Potter',
//     email: 'harrypotter@hogwards.edu.uk',
//     hobbies: ['Getting in trouble', 'Doing Magic'],
//     address: {
//         lane: 'Lane 2',
//         street: 'Street 4',
//         country: 'United Kingdom'
//     }
// }
// console.log(myUser)

// const users = [ 
//     {
//         name:'Harry Potter',
//         email: 'harrypotter@hogwards.edu.uk',
//         hobbies: ['Getting in trouble', 'Doing Magic'],
//         address: {
//             lane: 'Lane 2',
//             street: 'Street 4',
//             country: 'United Kingdom'
//         }
//     }, 
//     {
//         name:'Harry Potter',
//         email: 'harrypotter@hogwards.edu.uk',
//         hobbies: ['Getting in trouble', 'Doing Magic'],
//         address: {
//         lane: 'Lane 2',
//         street: 'Street 4',
//         country: 'United Kingdom'
//     }
//     }, 
//     {
//         name:'Harry Potter',
//         email: 'harrypotter@hogwards.edu.uk',
//         hobbies: ['Getting in trouble', 'Doing Magic'],
//         address: {
//         lane: 'Lane 2',
//         street: 'Street 4',
//         country: 'United Kingdom'
//     }
//     }, 
//     {
//         name:'Harry Potter',
//         email: 'harrypotter@hogwards.edu.uk',
//         hobbies: ['Getting in trouble', 'Doing Magic'],
//         address: {
//         lane: 'Lane 2',
//         street: 'Street 4',
//         country: 'United Kingdom'
//     }
//     } 
// ]


// Convert JS to JSON
// const response = JSON.stringify(myUser)
// console.log(response)




//LOOPS
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }                   //For loop

// let i = 0;
// while (i < 5) {
//   console.log(i++);
// }                   //while loop





//This keyword usage
// const person = {
//   name: "Manik",
//   greet: function () {
//     console.log("Hello " + this.name);
//   }
// };
// person.greet();



//Template Literals
// const na = "Manik";
// console.log(`Hello, ${na}`);


// Import and Export
// import { imp } from './Ajax2.js';
// console.log(imp); 




//Asynchronous JS
//Callback
// setTimeout(() => console.log("Done"), 3000);


//Promises
// let promise = new Promise ((resolve) => resolve("Success"));
// promise.then(msg => console.log(msg));


//Async/Await
// async function fetchData() {
//   let data = await fetch("https://api.example.com");
//   return data;
// }





// JS Numbers
// let a = 25;
// let b = 3.14159;

// console.log(a + b);               
// console.log(b.toFixed(2));        
// console.log(Number(a,b));       
// console.log(parseFloat("45.67")); 
// console.log(Number.isNaN("abc")); 
// console.log(10 / 0);              
// console.log(0 / 0);
