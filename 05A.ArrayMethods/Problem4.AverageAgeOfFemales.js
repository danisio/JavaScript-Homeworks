// Write a function that calculates the average age of all females, extracted from an array of persons
// Use Array#filter
// Use only array methods and no regular loops (for, while)

function buildPerson(fname, lname, age, gender) {
    return {
        firstName: fname,
        lastName: lname,
        age: age,
        gender: ('female' === gender)
    }
}

var arr = [
    buildPerson('Petq', 'Kostova', 15, 'female'),
    buildPerson('Ivan', 'Ivanov', 16, 'male'),
    buildPerson('Galq', 'Ivanova', 29, 'female'),
    buildPerson('Ivan', 'Todorov', 30, 'male'),
    buildPerson('Maria', 'Petkova', 20, 'female')
];

function findAllWomen(arr, func) {
    return arr.filter(func);
}

function checkGender(item) {
    return item.gender;
}

var result = findAllWomen(arr, checkGender);
var len = result.length;
result = result.reduce(function (sum, item) {
    return (sum + item.age);
}, 0);

console.log('Average age of all females --> ' + (result / len).toFixed(2));
