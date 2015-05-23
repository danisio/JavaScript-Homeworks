// Write a function that returns the last digit of given integer as an English word.

function lastDigit(number) {
    var words = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'],
        lastDigit = number % 10;

    return words[lastDigit];
}

console.log(lastDigit(512));
console.log(lastDigit(1024));
console.log(lastDigit(12309));