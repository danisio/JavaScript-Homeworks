// Write a function that finds the youngest male person in a given array of people and prints his full name
// Use only array methods and no regular loops (for, while)
// Use Array#find

function buildPerson(fname, lname, age, gender) {
    return {
        firstName: fname,
        lastName: lname,
        age: age,
        gender: ('female' === gender)
    }
}

function checkGender(item) {
    return !item.gender;
}

function sortArray(x, y) {
    return x.age - y.age;
}

if (!Array.prototype.find) {
    Array.prototype.find = function (callback) {
        var i, len = this.length;
        for (i = 0; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    }
}

var arr = [
    buildPerson('Petq', 'Kostova', 15, 'female'),
    buildPerson('Ivan', 'Ivanov', 21, 'male'),
    buildPerson('Galq', 'Ivanova', 29, 'female'),
    buildPerson('Ivan', 'Todorov', 30, 'male'),
    buildPerson('Maria', 'Petkova', 20, 'female')
];

var result = arr.sort(sortArray)
    .find(checkGender);
console.log(result.firstName + ' ' + result.lastName);