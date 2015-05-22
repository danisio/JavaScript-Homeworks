// Sorting an array means to arrange its elements in increasing order.
// Write a script to sort an array.
// Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
// Hint: Use a second array

function selectionSort(array) {
    var i,
        j,
        tmp,
        tmp2,
        length = array.length;
    for (i = 0; i < length - 1; i+=1) {
        tmp = i;
        for (j = i + 1; j < length; j+=1) {
            if (array[j] < array[tmp]) {
                tmp = j;
            }
        }
        if (tmp != i) {
            tmp2 = array[tmp];
            array[tmp] = array[i];
            array[i] = tmp2;
        }
    }
}

var arr = [64, 25, 12, 22, 11];
console.log(arr.join(','));

selectionSort(arr);

console.log('After sorting');
console.log(arr.join(','));