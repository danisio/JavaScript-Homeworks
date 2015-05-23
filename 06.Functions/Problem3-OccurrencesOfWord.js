// Write a function that finds all the occurrences of word in a text.
// The search can be case sensitive or case insensitive.
// Use function overloading.

function countOccurrences(text, word, caseSensitive) {
    var textCleaned = text.replace(/\W+/g, ' '),
        textAsArray,
        counter = 0,
        length,
        i;

    if (!caseSensitive) {
        textCleaned = textCleaned.toLowerCase();
        word = word.toLowerCase();
    }

    textAsArray = textCleaned.split(' ');
    length = textAsArray.length;

    for (i = 0; i < length; i += 1) {
        if (textAsArray[i] === word) {
            counter += 1;
        }
    }

    return counter;
}


var text = 'This is a test, not a Test, or tEst or testing the test!';
var word = 'test';
console.log('Case inSensitive: ' + countOccurrences(text, word, false) + ' times ');
console.log('Case sensitive: ' + countOccurrences(text, word, true) + ' times ');
