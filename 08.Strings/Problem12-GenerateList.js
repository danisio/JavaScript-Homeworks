// Write a function that creates a HTML <ul> using a template for every HTML <li>.
// The source of the list should be an array of elements.
// Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.

window.onload = function () {
    var people = [
            {name: 'Peter', age: 14},
            {name: 'Ivan', age: 20},
            {name: 'Kiril', age: 18},
            {name: 'Mihail', age: 17},
            {name: 'Todor', age: 22}
        ],
        template = document.getElementById('list-item').innerHTML,
        result,
        i,
        peopleList = '',
        length = people.length;

    for (i = 0; i < length; i += 1) {
        peopleList += '<li>';
        peopleList += template.replace(/-{name}-/, people[i].name).replace(/-{age}-/, people[i].age)
        peopleList += '</li>';
    }

    result = '<ul>' + peopleList + '</ul>';

    document.getElementById('result').innerHTML = result;
};

