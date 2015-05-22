// Write a script that finds the greatest of given 5 variables.
// Use nested if statements.

function biggest(num1, num2, num3, num4, num5) {
    if ((num1 > num2) && (num1 > num3) && (num1 > num4) && (num1 > num5)) {
        console.log("The biggest number is: " + num1);
    } else if ((num2 > num1) && (num2 > num3) && (num2 > num4) && (num2 > num5)) {
        console.log("The biggest number is: " + num2);
    } else if ((num3 > num1) && (num3 > num2) && (num3 > num4) && (num3 > num5)) {
        console.log("The biggest number is: " + num3);
    } else if ((num4 > num1) && (num4 > num2) && (num4 > num3) && (num4 > num5)) {
        console.log("The biggest number is: " + num4);
    } else {
        console.log("The biggest number is: " + num5);
    }
}

biggest(5, 2, 2, 4, 1, 5);
console.log(new Array(25).join('-'));
biggest(-2, -22, 1, 0, 0, 1);
