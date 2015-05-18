// Write an expression that checks for given integer if its third digit (right-to-left) is 7.

function result(number) {
    var check = Math.floor(number / 100) % 10 == 7;
    return check;
}

jsConsole.writeLine('Third digit 7? ');
jsConsole.writeLine('5 -- > ' + result(5));
jsConsole.writeLine('701 -- > ' + result(701));
jsConsole.writeLine('1732 -- > ' + result(1732));
jsConsole.writeLine('9703 -- > ' + result(9703));
jsConsole.writeLine('877 -- > ' + result(877));
jsConsole.writeLine('777877 -- > ' + result(777877));
jsConsole.writeLine('9999799 -- > ' + result(9999799));