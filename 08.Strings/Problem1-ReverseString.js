// Write a JavaScript function that reverses a string and returns it.

function reverse(text) {
    var result = '',
        i;

    for (i = text.length - 1; i >= 0; i-=1) {
        result += text[i];
    }

    return result;
}

console.log('sample -->  ' + reverse('sample'));
console.log('ABCDEF  -->  ' + reverse('ABCDEF'));