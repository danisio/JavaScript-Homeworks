// Sort 3 real values in descending order.
// Use nested if statements.

function order(a, b, c) {
    if ((a >= b) && (a >= c)) {
        if (b >= c) {
            console.log('Sorted: ' + a + ' ' + b + ' ' + c);
        } else {
            console.log('Sorted: ' + a + ' ' + c + ' ' + b);
        }
    } else if ((b >= a) && (b >= c)) {
        if (a >= c) {
            console.log('Sorted: ' + b + ' ' + a + ' ' + c);
        } else {
            console.log('Sorted: ' + b + ' ' + c + ' ' + a);
        }
    } else {
        if (a >= b) {
            console.log('Sorted: ' + c + ' ' + a + ' ' + b);
        } else {
            console.log('Sorted: ' + c + ' ' + b + ' ' + a);
        }
    }
}

order(5, 1, 2);
console.log(new Array(17).join('-'));
order(-2, -2, 1);
console.log(new Array(17).join('-'));
order(-2, 4, 3);
console.log(new Array(17).join('-'));
order(0, -2.5, 5);