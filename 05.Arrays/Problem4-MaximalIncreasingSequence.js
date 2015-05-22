// Write a script that finds the maximal increasing sequence in an array.

function sequence(array) {
    var currentCount = 1,
        bestCount = 0,
        start = 0,
        length = array.length;

    for (var i = 1; i < length; i += 1) {
        if (array[i] > array[i - 1]) {
            currentCount++;
        } else {
            currentCount = 1;
        }

        if (currentCount > bestCount) {
            bestCount = currentCount;
            start = i + 1 - bestCount;
        }
    }

    if (bestCount == 1) {
        start = 0;
    }

    console.log('The maximal increasing sequence is: ' + bestCount);

    for (var i = start; i < start + bestCount; i += 1) {
        console.log(array[i]);
    }
}

var arr = [3, 2, 3, 4, 2, 2, 4];
sequence(arr);