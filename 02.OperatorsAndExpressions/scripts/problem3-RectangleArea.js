// Write an expression that calculates rectangle’s area by given width and height.

function result(width, height) {
    var area = width * height;
    return area;
}

jsConsole.writeLine('width=3, height=5, area= ' + result(3, 5));
jsConsole.writeLine('width=3.5, height=6.8, area=  ' + result(3.5, 6.8));
jsConsole.writeLine('width=0.6, height=5, area =  ' + result(0.6, 5));