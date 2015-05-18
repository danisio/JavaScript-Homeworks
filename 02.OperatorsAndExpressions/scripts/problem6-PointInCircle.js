//*	Write an expression that checks if given point `P(x,  y)` is within a circle `K(O, 5)`.

function result(x, y) {
    var radius = 5;
    var check = (x * x) + (y * y) < (radius * radius);

    return check;
}

jsConsole.writeLine('The point is inside? ');
jsConsole.writeLine('x=0, y=1  --> ' + result(0, 1));
jsConsole.writeLine('x=-2, y=0  --> ' + result(-2, 0));
jsConsole.writeLine('x=-1, y=2  --> ' + result(-1, 2));
jsConsole.writeLine('x=1.5, y=-1  --> ' + result(1.5, -1));
jsConsole.writeLine('x=5, y=5  --> ' + result(5, 5));
jsConsole.writeLine('x=0, y=0  --> ' + result(0, 0));