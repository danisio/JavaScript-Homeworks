// Write an expression that checks if given integer is odd or even.

function result(number) {
    if (number % 2 === 0) {
        return false;
    }
    else {
        return true;
    }
}

jsConsole.writeLine('The number is odd?');
jsConsole.writeLine('3 --> ' + result(3));
jsConsole.writeLine('2 --> ' + result(2));
jsConsole.writeLine('-2 --> ' + result(-2));
jsConsole.writeLine('-1 --> ' + result(-1));
jsConsole.writeLine('0 --> ' + result(0));