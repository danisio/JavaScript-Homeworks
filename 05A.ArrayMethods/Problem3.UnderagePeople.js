// Write a function that prints all under aged persons of an array of person
// Use Array#filter and Array#forEach
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

function underAged(arr, func) {
    return arr.filter(func);
}

function checkAge(item) {
    return item.age < 18;
}

var result = underAged(arr, checkAge);
result.forEach(function (item) {
    console.log(item);
});