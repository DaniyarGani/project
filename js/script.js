"use strict";

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a-b;
}

// arr[99] = 0;
// arr.pop(); // Delete end element
// arr.push(10); // Update end element

// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// FOR
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// FOR-OF
// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; ')); 