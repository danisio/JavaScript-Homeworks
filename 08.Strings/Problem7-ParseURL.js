// Write a script that parses an URL address given in the format:
// [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
// Return the elements in a JSON object.

function parseURL(input) {
    var uri = document.createElement('a');
    uri.href = input;

    return {
        protocol: uri.protocol,
        server: uri.hostname,
        resource: uri.pathname,
    };
}

var testURL = 'http://telerikacademy.com/Courses/Courses/Details/239';
var test2URL = 'https://github.com/TelerikAcademy/JavaScript-Fundamentals';
console.log(parseURL(testURL));
console.log(parseURL(test2URL));