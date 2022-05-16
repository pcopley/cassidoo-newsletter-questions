/*

Given two integer arrays of size n, return a 
new array of size n such that n consists of 
only unique elements and the sum of all its 
elements is maximum.

Example:
========

let arr1 = [7, 4, 10, 0, 1]
let arr2 = [9, 7, 2, 3, 6]

$ maximizedArray(arr1, arr2)
$ [9, 7, 6, 4, 10]

*/

const maximizedArray = (arr1, arr2) => {
    return [...new Set([arr1, arr2].flat().sort((a,b)=>b-a))].slice(0, arr1.length);
}

console.log(maximizedArray([7,4,10,0,1],[9,7,2,3,6]));