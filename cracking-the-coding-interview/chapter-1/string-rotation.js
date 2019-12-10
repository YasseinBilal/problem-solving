/*
    String Rotation; Assume you have a method
    isSubString which checks if one word is a
    substring of another. Given two strings,
    s1 and s2, write code to check if s2 is 
    a rotation of s1 using only one call to 
    isSubstring [e.g., "waterbottle" is 
    a rotation oP'erbottlewat"),
*/


// Time Complexity: O(n)
function stringRotation(string1, string2) {
    if (string1.length !== string2.length) {
            return false;
    }
    return (string2 + string2).includes(string1);
}

// Test
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);