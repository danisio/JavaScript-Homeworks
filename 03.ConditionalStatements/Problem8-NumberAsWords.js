// Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.

function numberAsWords(number) {
    var numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    var twoDigitsNumbers = ["Ten", "Eleven", "Twelve", "Thir", "Four", "Fif", "Six", "Seven", "Eigh", "Nine"];

    if (number < 100) {
        console.log(tensAndHundreds(number, numbers, twoDigitsNumbers));
    } else if (number % 100 === 0) {
        console.log(tensAndHundreds(number / 100, numbers, twoDigitsNumbers) + " hundred");
    } else {
        console.log(tensAndHundreds(Math.floor(number / 100), numbers, twoDigitsNumbers) + " hundred and " + tensAndHundreds(number % 100, numbers, twoDigitsNumbers));
    }
}

function tensAndHundreds(n, numbers, twoDigitsNumbers) {
    if (n < 10) {
        return numbers[n];
    } else if (n < 13) {
        return twoDigitsNumbers[n % 10];
    } else if (n < 20) {
        return twoDigitsNumbers[n % 10] + "teen";
    } else if (n === 20) {
        return "Twenty";
    } else if (n < 30) {
        return "Twenty" + " " + numbers[n % 10];
    } else if (n % 10 === 0) {
        return twoDigitsNumbers[parseInt(n / 10)] + "ty";
    } else {
        return twoDigitsNumbers[parseInt(n / 10)] + "ty " + numbers[parseInt(n % 10)];
    }
}

numberAsWords(80);
numberAsWords(800);
numberAsWords(802);
numberAsWords(812);
numberAsWords(820);
numberAsWords(822);