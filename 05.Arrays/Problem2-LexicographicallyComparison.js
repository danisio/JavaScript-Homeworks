// Write a script that compares two char arrays lexicographically (letter by letter).

function compare(arr1, arr2) {
    var first = false,
        second = false,
        length = Math.min(arr1.length, arr2.length);

    for (var i = 0; i < length; i += 1) {
        if (arr1[i] < arr2[i]) {
            first = true;
            break;
        } else if (arr1[i] > arr2[i]) {
            second = true;
            break;
        } else {
            if (i === length - 1) {
                if (arr1.length < arr2.length) {
                    first = true;
                } else if (arr2.length < arr1.length) {
                    second = true;
                }
            }
        }
    }
    if (first) {
        console.log('Array 1 is before Array 2');
    } else if (second) {
        console.log('Array 2 is before Array 1');
    } else {
        console.log('Arrays are equal');
    }
}
var arr1 = 'abcdef';
var arr2 = 'abcde';

compare(arr1, arr2);
