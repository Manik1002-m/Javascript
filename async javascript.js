// Asynchronous JavaScript (Callbacks, Promises, Async/Await)



//Callback
// function greet(name, Callback){
//     console.log("Hi " + name);
//     Callback();
// }

// function sayBye(){
//     setTimeout(() =>console.log("Bye!"), 2000);
// }

// greet("Manik", sayBye);






//Promises
// let promise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Operation Successfull");
//     } else{
//         reject("Operation Unsuccessfull");
//     }
// });

// promise
// .then(result => console.log(result))
// .catch(error => console.log(error));






//Async/Await
async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
}

fetchData();