// Write a boolean expression for finding if the bit `#3` (counting from 0) of a given integer.
// The bits are counted from right to left, starting from bit `#0`.
// The result of the expression should be either `1` or `0`.

function result(number) {
    var mask = 1 << 3;
    var maskAndNumber = mask & number;
    var check = maskAndNumber >> 3;

    return check;
}

jsConsole.writeLine('| n | bit #3 | binary representation |')
jsConsole.writeLine('| 5  | ' + result(5) + ' | ' + 5..toString(2) + ' |');
jsConsole.writeLine('| 8  | ' + result(8) + ' | ' + 8..toString(2) + ' |');
jsConsole.writeLine('| 0  | ' + result(0) + ' | ' + 0..toString(2) + ' |');
jsConsole.writeLine('| 15 | ' + result(15) + ' | ' + 15..toString(2) + ' |');
jsConsole.writeLine('| 5343 | ' + result(5343) + ' | ' + 5343..toString(2) + ' |');
jsConsole.writeLine('| 62241 | ' + result(62241) + ' | ' + 62241..toString(2) + ' |');