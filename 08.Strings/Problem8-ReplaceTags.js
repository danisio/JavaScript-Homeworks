//Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].

function replaceTags(text) {
    var index = 0;
    while(index != -1) {
        text = text.replace('<a href="', '[URL=')
                   .replace('">', ']')
                   .replace('</a>', '[/URL]');
        index = text.indexOf('<a');
    }

    return text;
}

var sampleURL = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
console.log(replaceTags(sampleURL));
