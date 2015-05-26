// Write a function that groups an array of people by age, first or last name.
// The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
// Use function overloading (i.e. just one function)

function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}

function group(array, property) {
    var result = {};
    for (var person in array) {
        if (result[array[person][property]] == undefined || result[array[person][property]] == null) {
            result[array[person][property]] = [];
        }
        result[array[person][property]].push(array[person]);
    }
    return result;
}
var ivan = createPerson('Ivan', 'Ivanov', 18),
    kiril = createPerson('Kiril', 'Kirilov', 19),
    stefan = createPerson('Stefan', 'Stefanov', 20),
    array = [ivan, kiril, stefan],
    groupByFirstName = group(array, 'firstName'),
    groupByLastName = group(array, 'lastName'),
    groupByAge = group(array, 'age');

console.log('Grouped by first name:');
console.log(groupByFirstName);
console.log('Grouped by last name:');
console.log(groupByLastName);
console.log('Grouped by age:');
console.log(groupByAge);