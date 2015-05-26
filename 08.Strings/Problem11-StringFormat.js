// Write a function that formats a string using placeholders.
// The function should work with up to 30 placeholders and all types.

function stringFormat() {
    var formatted,
        replaceString,
        i;

    formatted = String(arguments[0]);
    for (i = 1; i < arguments.length; i++) {
        replaceString = "{" + (i - 1) + "}";
        while (formatted.indexOf(replaceString) > -1) {
            formatted = formatted.replace(replaceString, arguments[i]);
        }
    }

    return formatted;
}

var pattern = '{0}, {1}, {0} text {2}';
var str = stringFormat(pattern, 1, 'Pesho', 'Gosho');

console.log(str);
