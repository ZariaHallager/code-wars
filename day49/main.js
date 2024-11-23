// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


function duplicateEncode(word) {
    const charCount = {};
    word.toLowerCase().split('').forEach(char => {
        charCount[char] = charCount[char] + 1 || 1;
    });
    return word.toLowerCase().split('').map(char => charCount[char] > 1 ? ')' : '(').join('');
}

// Test cases   
console.log(duplicateEncode("din")); // Expected: "((("
console.log(duplicateEncode("recede")); // Expected: "()()()"
console.log(duplicateEncode("Success")); // Expected: ")())())"
console.log(duplicateEncode("(( @")); // Expected: "))(("