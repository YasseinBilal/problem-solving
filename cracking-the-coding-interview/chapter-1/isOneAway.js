/*
    One Away: There are three types of edits
    that can be performed on strings: insert
    a character, remove a character, or replace
    a character. Given two strings, write a function
    to check if they are one edit (or zero edits) away
*/

// Time Complexity: O(n)
function isOneAway(str1, str2) {
    
    const lengthDiff = str1.length - str2.length;
    
    // define pointers
    let p1 = 0; 
    let p2 = 0;

    let mulligan = false;
    
    if (Math.abs(lengthDiff) > 1) return false;

    switch (lengthDiff) {
        case -1:
            while (p2 < str2.length) {
                if (str1[p1] !== str2[p2]) {
                    if (mulligan) {
                        return false;
                    }                 
                    p2++;   
                    mulligan = true;
                } else {
                    p1++;
                    p2++;
                }
            }
            break;

        case 1:
            while (p1 < str1.length) {
                if (str1[p1] !== str2[p2]) {
                    if (mulligan) {
                        return false;
                    }                 
                    p1++;   
                    mulligan = true;
                } else {
                    p1++;
                    p2++;
                }
            }

        case 0:
            for (i = 0; i < str1.length; i++) {
                if (str1[i] !== str2[i]) {
                    if (mulligan) {
                        return false;
                    }
                    mulligan = true;
                }
            }
        default:
            break;     
    }
  
    return true;
}

// Test
console.log(isOneAway('pale', 'ple'), true);
console.log(isOneAway('pales', 'pale'), true);
console.log(isOneAway('pale', 'bale'), true);
console.log(isOneAway('pale', 'bake'), false);
