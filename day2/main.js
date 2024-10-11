function abbrevName(name) {
    // Step 1: Split the name into an array of words
    const words = name.split(' ');

    // Step 2: Take the first letter of each word and convert to uppercase
    const firstInitial = words[0][0].toUpperCase();
    const secondInitial = words[1][0].toUpperCase();

    // Step 3: Join the initials with a dot in between
    return `${firstInitial}.${secondInitial}`;
}

// Examples:
console.log(abbrevName("Sam Harris"));   // Output: S.H
console.log(abbrevName("patrick feeney")); // Output: P.F
