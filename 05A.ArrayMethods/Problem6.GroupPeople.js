// Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
// Use Array#reduce
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
    buildPerson('Ivan', 'Ivanov', 21, 'male'),
    buildPerson('Poli', 'Ivanova', 29, 'female'),
    buildPerson('Ivan', 'Todorov', 30, 'male'),
    buildPerson('Maria', 'Petkova', 20, 'female')
];

var result = arr.reduce(function (newGroup, person) {
    if (newGroup[person.firstName[0]]) {
        newGroup[person.firstName[0]].push(person);
    } else {
        newGroup[person.firstName[0]] = [person];
    }
    return newGroup;
}, {});

console.log(result);










































