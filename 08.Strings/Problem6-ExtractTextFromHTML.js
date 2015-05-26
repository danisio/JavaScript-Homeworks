//Write a function that extracts the content of a html page given as text.
//    The function should return anything that is in a tag, without the tags.

function extractText(text) {
    var inTag = false,
        length = text.length,
        result = '';

    for (var i = 0; i < length; i += 1) {
        if (text[i] === '<') {
            inTag = true;
            continue;
        }

        if (text[i] === '>') {
            inTag = false;
            continue;
        }

        if (!inTag) {
            result += text[i];
        }
    }

    return result;
}

var textSample = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';

console.log(extractText(textSample));