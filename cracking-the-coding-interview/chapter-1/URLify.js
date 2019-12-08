/*
    URLify: Write a method to replace all spaces
    in a string with '%20'. You may assume that
    the string has sufficient space at the end 
    to hold the additional characters, and that you
    are given the "true" length of the string.
*/

// Time Complexity: O(n)
function URLify(str) {
    return str.trim().split(' ').join('%20');
}

// tests
console.log(URLify('test data 123  ')) // return hello%20world%20123
