// Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
// Calculates and prints its real roots.
// Note: Quadratic equations may have 0, 1 or 2 real roots.

function quadraticEquations(a, b, c) {
    var d = b * b - 4 * a * c;

    if (d > 0) {
        var X1 = (-b + Math.sqrt(d)) / (2 * a);
        var X2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log('Real root x1=' + X1);
        console.log('Real root x2=' + X2);
    } else if (d === 0) {
        var X = -b / (2 * a);
        console.log('One root x=' + X);
    } else {
        console.log('There are no real roots.');
    }
}

quadraticEquations(2, 5, -3);
console.log(new Array(15).join('-'));
quadraticEquations(-1, 3, 0);
console.log(new Array(15).join('-'));
quadraticEquations(5, 2, 8);