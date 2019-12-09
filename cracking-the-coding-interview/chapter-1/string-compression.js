/*
    String Compression: Implement a method
    to perform basic string compression using
    the counts of repeated characters. For example,
    the string aabcccccaaa would become a2blc5a3, 
    If the "compressed" string would not become smaller
    than the original string, your method should return 
    the original string. You can assume the string has 
    only uppercase and lowercase letters (a - z).
*/

// Time Complexity: O(n).
function stringCompression(str) {
    const resultArray = [];
    let counter = 1;   
    
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            counter++
        } else {
            resultArray.push(str[i] + counter)
            counter = 1;
        }
    }
    
    return resultArray.join('').length < str.length ?
           resultArray.join('') : str;
}

// tests
console.log(stringCompression('aabcccccaaa')) // return a2blc5a3
