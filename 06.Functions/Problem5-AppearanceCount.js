// Write a function that counts how many times given number appears in given array.
// Write a test function to check if the function is working correctly.

function countNumbers(array, number) {
    var result = 0,
        length = array.length,
        i;

    for (i = 0; i < length; i += 1) {
        if (array[i] === number) {
            result += 1;
        }
    }

    return result;
}

function test(array, number, expectedNumber) {
    return countNumbers(array, number) === expectedNumber;
}
var myArray = [2, 3, 4, 5, 6, 4, 3, 2, 3, 4, 3, 2, 3, 4, 3, 3, 3, 3];

console.log(test(myArray, 3, 9) ? 'passed test' : 'NOT passed');
console.log(test(myArray, 5, 1) ? 'passed test' : 'NOT passed');