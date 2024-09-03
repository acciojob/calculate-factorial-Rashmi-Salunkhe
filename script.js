//your JS code here. If required.
function calculateFactorial(n) {
    if (n <= 1) return 1; // Base case for recursion
    return n * calculateFactorial(n - 1); // Recursive call
}

function main() {
    // Prompt user to enter a number
    const userInput = prompt("Enter a positive integer between 1 and 10:");
    
    // Convert input to a number
    const number = parseInt(userInput, 10);
    
    // Validate the input
    if (isNaN(number) || number < 1 || number > 10) {
        alert("Please enter a valid positive integer between 1 and 10.");
        return;
    }
    
    // Calculate factorial
    const result = calculateFactorial(number);
    
    // Display the result
    alert(`The factorial of ${number} is ${result}`);
}

// Call the main function to run the program
main();
