// Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.

function findProperties(obj) {
    var smallest, largest;

    for (var prop in obj) {
        if (!smallest) {
            smallest = prop;
        }
        if (!largest) {
            largest = prop;
        }
        if (prop < smallest) {
            smallest = prop;
        }
        if (prop > largest) {
            largest = prop;
        }
    }

    jsConsole.writeLine('smallest: ' + smallest);
    jsConsole.writeLine('largest: ' + largest);
}

jsConsole.writeLine('Document properties');
findProperties(document);
jsConsole.writeLine(new Array(25).join('-'));
jsConsole.writeLine('Window properties');
findProperties(window);
jsConsole.writeLine(new Array(25).join('-'));
jsConsole.writeLine('Navigator properties');
findProperties(navigator);
