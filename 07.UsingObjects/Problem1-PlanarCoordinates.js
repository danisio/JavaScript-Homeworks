// Write functions for working with shapes in standard Planar coordinate system.
// Points are represented by coordinates P(X, Y)
// Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
// Calculate the distance between two points.
// Check if three segment lines can form a triangle.

function calculateDistance(point1, point2) {
    var result,
        X = (point1.X - point2.X) * (point1.X - point2.X),
        Y = (point1.Y - point2.Y) * (point1.Y - point2.Y);

    result = Math.sqrt(X + Y);
    return result;
}

function isTriangle(line1, line2, line3) {
    return ((line1 + line2 > line3) && (line2 + line3 > line1) && (line1 + line3 > line2));
}

var point1 = {X: 2, Y: 3},
    point2 = {X: 2, Y: 2},
    point3 = {X: 4, Y: 2},
    line1 = calculateDistance(point1, point2),
    line2 = calculateDistance(point2, point3),
    line3 = calculateDistance(point3, point1);

console.log('Distance between point1 and point2 --> ' + calculateDistance(point1, point2) + 'cm');
console.log('These lines can form a triangle --> ' + isTriangle(line1, line2, line3));
