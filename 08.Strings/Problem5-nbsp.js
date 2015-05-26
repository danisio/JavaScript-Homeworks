// Write a function that replaces non breaking white-spaces in a text with &nbsp;

function replaceWhiteSpace(input){
    var param = 'gi',
        regex = new RegExp(' ', param);

    return input.replace(regex, '&nbsp;');
}

var textSample = 'Write a function that   replaces non breaking      white-spaces in a text.';

console.log(replaceWhiteSpace(textSample));