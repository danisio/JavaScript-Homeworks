//*	Write an expression that checks if given positive integer number n (n ≤ 100) is prime.

function result(number) {
    var sqrtNumber = Math.sqrt(number);
    var check = true;

    if (number === 1 || number === 0) {
        check = false;
    } else {
        for (var i = 2; i <= sqrtNumber; i += 1) {
            if (number % i === 0) {
                check = false;
                break;
            }
        }
    }

    return check;
}

jsConsole.writeLine('The number is prime:');
jsConsole.writeLine('1 --> ' + result(1));
jsConsole.writeLine('2 --> ' + result(2));
jsConsole.writeLine('3 --> ' + result(3));
jsConsole.writeLine('4 --> ' + result(4));
jsConsole.writeLine('9 --> ' + result(9));
jsConsole.writeLine('37 --> ' + result(37));
jsConsole.writeLine('97 --> ' + result(97));
jsConsole.writeLine('51 --> ' + result(51));
jsConsole.writeLine('0 --> ' + result(0));