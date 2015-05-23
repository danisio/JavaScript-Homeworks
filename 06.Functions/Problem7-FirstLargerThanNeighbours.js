// Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
// Use the function from the previous exercise.

function isLarger(array, position) {
    var result;

    if (position === 0) {
        result = array[position] > array[position + 1];
    } else if (position === array.length - 1) {
        result = array[position] > array[position - 1];
    } else {
        result = array[position] > array[position + 1] && array[position] > array[position - 1];
    }

    return result;
}

function checkNumber(array) {
    var length = array.length,
        i;

    for (i = 0; i < length; i += 1) {
        if (isLarger(array, i)) {
            return i;
        }
    }

    return -1;
}

var testArray = [1, 2, 3, 4, 5, 4, 5, 6, 7];
console.log('The index = ' + checkNumber(testArray));

