// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
