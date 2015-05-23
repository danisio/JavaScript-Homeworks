// Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).

function checkNumber(array, position) {
    var result;
    if (position === 0) {
        result = array[position] > array[position + 1];
    }
    else if (position === array.length - 1) {
        result = array[position] > array[position - 1];
    }
    else {
        result = array[position] > array[position + 1] && array[position] > array[position - 1];
    }

    return result;
}

var testArray = [1,2,3,4,5,4,5,6,7];
console.log('Larger? --> ' + checkNumber(testArray, 0));
console.log('Larger? --> ' + checkNumber(testArray, 4));
console.log('Larger? --> ' + checkNumber(testArray, 8));