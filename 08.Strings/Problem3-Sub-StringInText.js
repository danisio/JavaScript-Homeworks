// Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).

function countSubStrings(input, subString) {
    var param = 'gi',
        regex = new RegExp(subString, param);

    return input.match(regex).length;
}

var textSample = "We are living IN an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.";

console.log(countSubStrings(textSample, 'in'));