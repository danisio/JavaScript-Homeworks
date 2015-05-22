// Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
// As a result print the values a and b, separated by a space.

function swap(a, b) {
    if (a > b) {
        a ^= b;
        b ^= a;
        a ^= b;

        console.log('Swapped:');
        console.log('a=' + a);
        console.log('b=' + b);
    } else {
        console.log('NOT swapped');
    }
}

var a = 3,
    b = 6;
console.log('a=' + a);
console.log('b=' + b);
swap(a, b);

a = 10;
b = 4;
console.log('a=' + a);
console.log('b=' + b);
swap(a, b);