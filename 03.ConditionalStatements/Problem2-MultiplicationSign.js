// Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
// Use a sequence of if operators.

function checkSign(a, b, c) {
    if (a == 0 || b == 0 || c == 0) {
        console.log('The sign is: 0');
    } else if (a < 0 && b > 0 && c > 0 ||
               a > 0 && b < 0 && c > 0 ||
               a > 0 && b > 0 && c < 0 ||
               a < 0 && b < 0 && c < 0) {
        console.log('The sign is: -');
    } else {
        console.log('The sign is: +');
    }
}

checkSign(2, 3, 4.3);
console.log(new Array(15).join('-'));
checkSign(2, -3, 4);
console.log(new Array(15).join('-'));
checkSign(2, -3.4, -4);
console.log(new Array(15).join('-'));
checkSign(2, 3, 0);