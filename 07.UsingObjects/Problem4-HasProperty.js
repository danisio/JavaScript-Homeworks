// Write a function that checks if a given object contains a given property.

function hasProperty(obj, property) {
   return obj.hasOwnProperty(property);
}

var testObject = {
    fName: 'Ivan',
    lName: 'Ivanov',
    age: 100,
    city: 'Sofia'
}

console.log('Has property "age" -- > ' + hasProperty(testObject, 'age'));
console.log('Has property "length" -- > ' + hasProperty(testObject, 'length'));