// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?
// function swapValues() {
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }
// Test cases
// var arr = [1, 2];
// swapValues(arr);
// console.log(arr[0]); // Expected: 2
// console.log(arr[1]); // Expected: 1
// Task:
// Fix the swapValues function to swap the values of the first and second argument and return an array containing them.
// Problem
function swapValues() {
    return arguments[0].reverse();
}