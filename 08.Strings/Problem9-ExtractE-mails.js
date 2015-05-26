//Write a function for extracting all email addresses from given text.
//    All sub-strings that match the format @… should be recognized as emails.
//    Return the emails as array of strings.

function findEmailAddresses(text) {
    var emailsArray = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    return emailsArray;
}

var textSample = "Testing test@gmail.com and test2@gmail and test3?gmail.com and test4@gmail.com";

console.log(findEmailAddresses(textSample).join());

