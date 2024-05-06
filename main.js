// basic function without returning value
function halfFryEgg() {
    var cocked = 1 + 1.5 + 2;
    // egg + butter + Salt
    console.log(cocked);
}
halfFryEgg(); // invoking the function
// Function returning value
function halfFryEgg1() {
    var cocked1 = 1 + 1.5 + 2;
    return cocked1;
}
var response1 = halfFryEgg1();
console.log(response1);
// Function addNumber
function addNumber(a, b) {
    return a + b;
}
var response2 = addNumber(5, 3); //Invoking the function
console.log(response2);
// Function CalculateArea
function calculateArea(widht, height) {
    return widht * height;
}
var response3 = calculateArea(500, 50);
console.log(response3);
