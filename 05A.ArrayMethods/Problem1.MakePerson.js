// Write a function for creating persons.
// Each person must have firstName, lastName, age and gender (true is female, false is male)
// Generate an array with ten person with different names, ages and genders

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
    buildPerson('Maria', 'Petkova', 20, 'female'),
    buildPerson('Stefka', 'Igoova', 24, 'female'),
    buildPerson('Ivan', 'Mihov', 28, 'male'),
    buildPerson('Iva', 'Ivanova', 21, 'female'),
    buildPerson('Ivan', 'Dinov', 35, 'male'),
    buildPerson('Mina', 'Gerova', 22, 'female')
];

console.log(arr);