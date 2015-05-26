// Write a JavaScript function to check if in a given expression the brackets are put correctly.
// Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).

function checkBrackets(input) {
    var a = '(',
        b = ')',
        i,
        length = input.length,
        counter = 0;

    for (i = 0; i < length; i += 1) {
        if (input[i] === a) {
            counter += 1;
        } else if (input[i] === b) {
            counter -= 1;
        }

        if (counter < 0) {
            return false;
        }
    }

    return !counter;
}

console.log(checkBrackets('((a+b)/5-d)') ? 'correct' : 'incorrect');
console.log(checkBrackets(')(a+b))') ? 'correct' : 'incorrect');
