const letters = ["a","b","c"];

const newArray = letters.map(item => item + "++")

// const newArray = [];

// for (let i = 0; i < letters.length; i++) {
//     const element = letters[i];
//     newArray.push(element+"++"); 
// }

console.log("Original Array: " + letters)
console.log("New Array: " + newArray)