// basic function without returning value
function halfFryEgg() {
    let cocked = 1 + 1.5 + 2;
    // egg + butter + Salt
    console.log(cocked)
}

halfFryEgg() // invoking the function

// Function returning value

function halfFryEgg1(): number {
    let cocked1 = 1 + 1.5 + 2;
    return cocked1;
}

let response1: number = halfFryEgg1()
console.log(response1);

// Function addNumber
function addNumber(a: number, b: number): number {
    return a + b;
}
let response2 = addNumber(5, 3) //Invoking the function
console.log(response2);

// Function CalculateArea

function calculateArea(widht: number, height: number): number {
    return widht * height;
}
let response3 = calculateArea(500, 50)
console.log(response3);