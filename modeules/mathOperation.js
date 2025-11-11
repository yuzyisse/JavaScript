// mathOperation.js

// Multiply two numbers
export function mutiply(a,b) {
    return a * b;
}

// Divide two numbers
export function divide(a,b) {
    if (b == 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Subtract the second number from the first
export function subtract(a,b) {
    return a-b;
}

let result = mutiply(2,5)
console.log(result)  // Output: 10