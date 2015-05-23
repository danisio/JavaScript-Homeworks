// Write a function that reverses the digits of given decimal number.

function reverse(number) {
    var numberToString,
        length,
        result = '',
        i;

    if (number < 0) {
        number *= -1;
        result += '-';
    }

    numberToString = number.toString();
    length = numberToString.length - 1;

    for (i = length; i >= 0; i -= 1) {
        result += numberToString[i];
    }

    return result;
}

console.log('The reversed number: ' + reverse(256));
console.log('The reversed number: ' + reverse(123.45));
console.log('The reversed number: ' + reverse(-543));