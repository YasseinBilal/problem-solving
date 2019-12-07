/*
Check Permutation: Given two strings, 
write a method to decide if one is
a permutation of the other.
*/

// sorting method
// Time Complexity: Depends on the sorting technique that is used.
function checkPermutation(str1, str2) {
    
    if (str1.length !== str2.length) return false;
    
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// count method
// Time Complexity: O(n)
function checkPermutation(str1, str2) {
    
    if (str1.length !== str2.length) return false;

    const dict1 = [];
    const dict2 = [];
    
    for (i = 0; str1[i] && str2[i]; i++) {
        dict1[str1[i]] ? dict1[str1[i]]++ : dict1[str1[i]] = 1;
        dict2[str2[i]] ? dict2[str2[i]]++ : dict2[str2[i]] = 1;
    }

    if (Object.keys(dict1).length !== Object.keys(dict2).length) {
        return false;
    }

    Object.keys(dict1).forEach(key => {
        if (dict1[key] !== dict2[key]) return false;
    });

    return true;   
}

// tests
console.log(checkPermutation('abc', 'cba')) // return true
console.log(checkPermutation('abc', 'ddaa')) // return false
