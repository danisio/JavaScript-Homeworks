// Write a boolean expression that checks for given integer if it can be divided (without remainder) by `7` and `5` in the same time.

function result(number) {
    if (number % 5 === 0 && number % 7 === 0) {
        return true;
    }
    else {
        return false;
    }
}

jsConsole.writeLine('Divided by 7 and 5?');
jsConsole.writeLine('3 --> ' + result(3));
jsConsole.writeLine('0 --> ' + result(0));
jsConsole.writeLine('5 --> ' + result(5));
jsConsole.writeLine('7 --> ' + result(7));
jsConsole.writeLine('35 --> ' + result(35));
jsConsole.writeLine('140 --> ' + result(140));