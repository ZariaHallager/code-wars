// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Examples:
// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"

function divisors(n) {
    // Generate potential divisors from 2 up to Math.floor(n / 2)
    const potentialDivisors = Array.from({ length: Math.floor(n / 2) - 1 }, (_, i) => i + 2);

    // Use reduce to collect valid divisors into the result array
    const result = potentialDivisors.reduce((acc, val) => {
        if (n % val === 0) {
            acc.push(val); // If divisible, add to accumulator
        }
        return acc; // Return the accumulator for next iteration
    }, []);

    // Return result or the string indicating the number is prime
    return result.length ? result : `${n} is prime`;
}

// Examples:
console.log(divisors(12)); // [2, 3, 4, 6]
console.log(divisors(25)); // [5]
console.log(divisors(13)); // "13 is prime"
