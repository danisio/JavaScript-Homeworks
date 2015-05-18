//*	Write an expression that calculates trapezoid's area by given sides `a` and `b` and height `h`.

function result(sideA, sideB, height) {
    var area = ((sideA + sideB) / 2) * height;

    return area.toFixed(2);
}

jsConsole.writeLine('a=5, b=7, h=12 --> area=' + result(5, 7, 12));
jsConsole.writeLine('a=2, b=1, h=33 --> area=' + result(2, 1, 33));
jsConsole.writeLine('a=8.5, b=4.3, h=2.7 --> area=' + result(8.5, 4.3, 2.7));
jsConsole.writeLine('a=100, b=200, h=300 --> area=' + result(100, 200, 300));
jsConsole.writeLine('a=0.222, b=0.333, h=0.555 --> area=' + result(0.222, 0.333, 0.555));