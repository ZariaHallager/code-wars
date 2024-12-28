// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

// Examples

// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {
    //loop through the array
    // count each element
    // conditional that checks 3:2 ratio of letters
    // return true or false
    let obj = {};
    array.forEach((element) => {
        if (obj[element]) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    });
    let values = Object.values(obj);
    return values.includes(3) && values.includes(2);
}

