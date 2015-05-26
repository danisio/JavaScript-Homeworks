// Write a function that finds the youngest person in a given array of people and prints his/hers full name
// Each person has properties firstname, lastname and age.

function findYoungest(array) {
    var length = array.length,
        youngest = 100,
        result = '',
        i;

    for (i = 0; i < length; i += 1) {
        if (youngest > array[i].age) {
            youngest = array[i].age;
            result = array[i].firstName + ' ' + array[i].lasName + ' age: ' + array[i].age;
        }
    }

    return result;
}

var people = [
    {firstName: 'Gosho', lasName: 'Petrov', age: 32},
    {firstName: 'Bay', lasName: 'Ivan', age: 81},
    {firstName: 'Ivan', lasName: 'Petrov', age: 18},
    {firstName: 'Stefan', lasName: 'Stefanov', age: 24},
    {firstName: 'Kiril', lasName: 'Kirilov', age: 20}
];

console.log(findYoungest(people));