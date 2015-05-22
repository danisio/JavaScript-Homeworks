// Write a script that finds the most frequent number in an array.

function frequent(array) {
    array.sort(function(a, b) {
        return a - b;
    });

    var currentNumber = 0,
        count = 0,
        currentCount = 1,
        length = array.length;
    for (var i = 1; i < length; i += 1) {
        if (array[i] === array[i - 1]) {
            currentCount++;

            if (currentCount > count) {
                currentNumber = array[i];
                count = currentCount;
            }
        } else {
            currentCount = 1;
        }
    }

    if (count === 0) {
        console.log('All numbers are found only once');
    } else {
        console.log('The result: ' + currentNumber + ' --> ' + count + ' times');
    }
}

var arr = [4, 1, 1, 43, 2, 3, 4, 4, 1, 2, 4, 9, 3];
console.log('The array: ' + arr.join(','));
frequent(arr);
