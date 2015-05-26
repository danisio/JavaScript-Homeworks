// Write a function that makes a deep copy of an object.
// The function should work for both primitive and reference types.

function copy(obj){
    if (typeof obj !== 'object') {
        return obj;
    }

    var cloned = {};
    for (var prop in obj) {
        cloned[prop] = copy(obj[prop]);
    }

    return cloned;
}
var array = [1,2,3];
var object = {
    width: 10,
    length: 20
};
var newArray = copy(array);
var newObject = copy(object);

newObject.length = 100; // assigned new value
console.log(object); // object.length didn't changed
console.log(newObject);
