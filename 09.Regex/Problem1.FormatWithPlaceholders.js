// Write a function that formats a string. The function should have placeholders, as shown in the example
// Add the function to the String.prototype

String.prototype.format = function (placeholders) {
    var item,
        regex,
        result = this;

    for (item in placeholders) {
        regex = new RegExp('#{' + item + '}', 'g');
        result = result.replace(regex, placeholders[item]);
    }

    return result;
};

var placeholders = {name: 'John'};
var text = 'Hello, there! Are you #{name}?';
console.log(text.format(placeholders));

var placeholders2 = {name: 'John', age: 13};
var text2 = 'My name is #{name} and I am #{age}-years-old';
console.log(text2.format(placeholders2));