function countSheep(num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}

// Example usage:
console.log(countSheep(3)); // "1 sheep...2 sheep...3 sheep..."
