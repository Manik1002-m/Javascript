// JS MAP
// const myMap = new Map();

// myMap.set('name', 'Manik');
// myMap.set(1, 'one');

// console.log(myMap.get('name'));
// console.log(myMap.get(1));

// console.log(myMap.size);




//Questions

// Count frequency of elements in an array
// const arr = ['apple', 'banana', 'apple', 'orange', 'banana'];
// const map = new Map();

// arr.forEach(item => {
//     map.set(item, (map.get(item) || 0) + 1);
// });

// console.log(map);



//Find first non repeating character
// const str = "aabbcde";
// const map = new Map();

// for(let ch of str){
//     map.set(ch, (map.get(ch) || 0) + 1);
// }
// console.log(map);

// for(let [key, val] of map){
//     if(val == 1){
//         console.log("First non-repeating:", key);
//         break;
//     }
// }








//Set
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("a");

console.log(letters);
console.log(letters.has("b"));