// Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.

function binarySearch(array, number) {
    var min = 0,
        max = array.length - 1;

    while (min <= max) {
        var middle = Math.floor((min + max) / 2);

        if (number === array[middle]) {
            return middle;
        } else if (number < array[middle]) {
            max = middle - 1;
        } else {
            min = middle + 1;
        }
    }

    return -1;
}

var arr = [-4, -2, 0, 12, 56, 234, 357];
console.log('Index = ' + binarySearch(arr, 1));
console.log('Index = ' + binarySearch(arr, 56));