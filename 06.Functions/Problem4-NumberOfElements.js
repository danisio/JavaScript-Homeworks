// Write a function to count the number of div elements on the web page

function countDivs() {
    var counter = document.getElementsByTagName('div').length;

    return counter;
}

console.log("All divs in the page --> " + countDivs());
