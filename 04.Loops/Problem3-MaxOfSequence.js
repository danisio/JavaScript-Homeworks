// Write a script that finds the max and min number from a sequence of numbers.

function minMax(array) {
    var maxNumber = array[0],
        minNumber = array[0],
        length = array.length;

    for (var i = 0; i < length; i+=1) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }

    console.log('min number = ' + minNumber);
    console.log('max number = ' + maxNumber);
}

minMax([3, 5, 2, 8, -1, 6]);
console.log(new Array(16).join('-'));
minMax([-100, -2, 0, 9, 1000]);

