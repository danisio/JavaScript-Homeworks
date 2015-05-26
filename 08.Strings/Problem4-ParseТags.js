// You are given a text. Write a function that changes the text in all regions:

function changeRegions(text) {
    var result = '',
        rand = 0,
        upCase = false,
        lowCase = false,
        mixCase = false,
        i;

    for (i = 0; i < text.length; i+=1) {
        if (text[i] === '<' && text[i + 1] === 'u') {
            i = i + 8;
            upCase = true;
        }
        if (text[i] === '<' && text[i + 1] === '/' && text[i + 2] === 'u') {
            i = i + 9;
            upCase = false;
        }
        if (text[i] === '<' && text[i + 1] === 'l') {
            i = i + 9;
            lowCase = true;
        }
        if (text[i] === '<' && text[i + 1] === '/' && text[i + 2] === 'l') {
            i = i + 10;
            lowCase = false;
        }
        if (text[i] === '<' && text[i + 1] === 'm') {
            i = i + 9;
            mixCase = true;
        }
        if (text[i] === '<' && text[i + 1] === '/' && text[i + 2] === 'm') {
            i = i + 10;
            mixCase = false;
        }

        if (upCase === true) {
            result += text[i].toUpperCase();
        } else if (lowCase === true) {
            result += text[i].toLowerCase();
        } else if (mixCase === true) {
            rand = Math.random();
            if (rand < 0.5) {
                result += text[i].toLowerCase();
            } else {
                result += text[i].toUpperCase();
            }
        }
        else {
            result += text[i];
        }
    }
    return result;
}

var textSample = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';

console.log(changeRegions(textSample));