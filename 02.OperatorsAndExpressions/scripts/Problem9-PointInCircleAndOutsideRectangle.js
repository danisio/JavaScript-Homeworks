//*	Write an expression that checks for given point `P(x, y)` if it is within the circle `K( (1,1), 3)` and out of the rectangle `R(top=1, left=-1, width=6, height=2)`.

function result(x, y) {
    var radius = 3;

    var insideCircle = ((x - 1, 2) * (x - 1, 2) + (y - 1, 2) * (y - 1, 2) < (radius * radius));
    var outsideRect = ((x < -1) || (x > 5) || (y < -1) || (y > 1));
    var inAndOut = insideCircle && outsideRect;

    return inAndOut;
}

jsConsole.writeLine('Inside K & outside of R ?');
jsConsole.writeLine('x=1, y=2 --> ' + result(1, 2));
jsConsole.writeLine('x=2.5, y=2 --> ' + result(2.5, 2));
jsConsole.writeLine('x=0, y=1 --> ' + result(0, 1));
jsConsole.writeLine('x=2.5, y=1 --> ' + result(2.5, 1));
jsConsole.writeLine('x=2, y=0 --> ' + result(2, 0));
jsConsole.writeLine('x=4, y=0 --> ' + result(4, 0));
jsConsole.writeLine('x=2.5, y=1.5 --> ' + result(2.5, 1.5));
jsConsole.writeLine('x=2, y=1.5 --> ' + result(2, 1.5));
jsConsole.writeLine('x=1, y=2.5 --> ' + result(1, 2.5));