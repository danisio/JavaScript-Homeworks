// Write a script that finds the biggest of three numbers.
// Use nested if statements.

function biggest(a, b, c) {
    if ((a > b) && (a > c)) {
        console.log('The biggest number is: ' + a);
    } else if (b > a) {
        if (b > c) {
            console.log('The biggest number is: ' + b);
        } else {
            console.log('The biggest number is: ' + c);
        }
    } else {
        console.log('The biggest number is: ' + c);
    }
}

biggest(2, 4, 1);
console.log(new Array(25).join('-'));
biggest(-2, -1, 0);