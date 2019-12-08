/*
    Implement an algorithm to determine if a string
    has all unique characters. What if you cannot
    use additional data structures
*/

// Time Complexity: O(n^2).
// no additional data structures used
function isUnique(str) {
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

// Time Complexity: O(n).
// Using dictionary data structure
function isUnique(str) {
    const dictionary = {};
    for (i = 0; i < str.length; i++) {
        if (dictionary[str[i]]) return false;
        dictionary[str[i]] = true;
    }
    return true;
}

// tests
console.log(isUnique('aabc')) // return false
console.log(isUnique('abc')) // return true
