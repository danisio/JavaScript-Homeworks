// Write a function that checks if an array of person contains only people of age (with age 18 or greater)
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
    buildPerson('Galq', 'Ivanova', 29, 'female'),
    buildPerson('Ivan', 'Todorov', 30, 'male'),
    buildPerson('Maria', 'Petkova', 20, 'female')
];

function isGreaterThan18(num) {
    return num >= 18;
}

console.log('All people are at least 18 --> ' + arr.every(isGreaterThan18));
