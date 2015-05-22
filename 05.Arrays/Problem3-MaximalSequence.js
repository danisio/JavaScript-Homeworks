// Write a script that finds the maximal sequence of equal elements in an array.

function sequence(array) {
    var currentCount = 1,
        bestCount = 1,
        currentSymbol = '',
        length = array.length;
    for (var i = 1; i < length; i += 1) {
        if (array[i] === array[i - 1]) {
            currentCount++;
            if (currentCount > bestCount) {
                bestCount = currentCount;
                currentSymbol = array[i];
            }
        } else {
            currentCount = 1;
        }
    }

    if (bestCount === 1) {
        currentSymbol = array[0];
    }

    console.log('The maximal sequence is: ' + bestCount);
    console.log(new Array(bestCount + 1).join(currentSymbol + ' '));
}

var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
sequence(arr);