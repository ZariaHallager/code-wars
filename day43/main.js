// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

// If you like this Kata, please try:

// Sum of prime-indexed elements

// Sum of integer combinations

function repeats(arr) {
    // Step 1: Create an empty object to store the count of each number
    let counts = {};
    // Step 2: Iterate through the array and populate the counts object
    for (let num of arr) {
        // If num is already in counts, increment its value by 1, otherwise set it to 1
        counts[num] = (counts[num] || 0) + 1;
    }
    // Step 3: Filter out the keys (converted to numbers) that have a count of 1
    // Use Object.keys() and filter
    let uniqueNumbers = Object.keys(counts).filter(key => counts[key] === 1).map(Number);
    // Step 4: Calculate the sum of the unique numbers
    let sum = uniqueNumbers.reduce((acc, curr) => acc + curr, 0);
    // Step 5: Return the sum
    return sum;
}
