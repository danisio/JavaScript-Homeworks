// Write a function that puts the value of an object into the content/attributes of HTML tags.
// Add the function to the String.prototype

String.prototype.bind = function (params) {
    var patternContent,
        patternHref,
        patternClass,
        prop,
        result = this;

    for (prop in params) {
        patternContent = new RegExp('(<.*data-bind-content="' + prop + '".*?>)', 'g');
        patternHref = new RegExp('(<.*data-bind-href="' + prop + '")', 'g');
        patternClass = new RegExp('(<.*data-bind-class="' + prop + '")', 'g');

        result = result
            .replace(patternContent, function (content) {
                return content + params[prop];
            })
            .replace(patternHref, function (content) {
                return content + ' href="' + params[prop] + '"';
            })
            .replace(patternClass, function (content) {
                return content + ' class="' + params[prop] + '"';
            });
    }

    return result;
};
var test1 = '<div data-bind-content="name"></div>';
var obj1 = {name: 'Steven'};
console.log(test1.bind(obj1));

var test2 = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></a>';
var obj2 = {
    name: 'Elena',
    link: 'http://telerikacademy.com'
};
console.log(test2.bind(obj2));