// Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English).
// Print “not a digit” in case of invalid input.
// Use a switch statement.

function digitAsAWord(number) {
    switch (number) {
        case 0:
            console.log('ZERO');
            break;
        case 1:
            console.log('ONE');
            break;
        case 2:
            console.log('TWO');
            break;
        case 3:
            console.log('THREE');
            break;
        case 4:
            console.log('FOUR');
            break;
        case 5:
            console.log('FIVE');
            break;
        case 6:
            console.log('SIX');
            break;
        case 7:
            console.log('SEVEN');
            break;
        case 8:
            console.log('EIGHT');
            break;
        case 9:
            console.log('NINE');
            break;
        default :
            console.log('Not a digit!')
    }
}

digitAsAWord(3);
console.log(new Array(13).join('-'));
digitAsAWord('3');
console.log(new Array(13).join('-'));
digitAsAWord(0);