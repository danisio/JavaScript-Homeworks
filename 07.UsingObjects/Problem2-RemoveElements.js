// Write a function that removes all elements with a given value.
// Attach it to the array type.
// Read about prototype and how to attach methods.

Array.prototype.remove = function (element) {
    for (var i = 0; i < this.length; i+=1) {
        if (this[i] === element) {
            this.splice(i, 1);
            i-=1;
        }
    }
};

var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
console.log('Initial array -- > ' + arr.join());
arr.remove(1);
console.log('Removed num 1 -- > ' + arr.join());
