/*
    Palindrome Permutation: Given a string,
    write a function to check if it is
    a permutation of a palin- drome. A palindrome
    is a word or phrase that is the same forwards
    and backwards. A permutation is a rearrangement
    of letters. The palindrome does not need to be limited
    to just dictionary words.
*/

// Time Complexity: O(n)
function palinPerm(str) {
    const dictionary = {};
    let isPerm = true;
    let mulligan = false;
    
    str.split('').forEach(char => {
        const character = char.toLowerCase();
        if (character !== ' ') {
            if (!dictionary[character]) {
                dictionary[character] = 1;
            } else {
                dictionary[character]++
            }
        }       
    });

    Object.values(dictionary).forEach(value => {
        if (value % 2 !== 0) {
            if (mulligan) {
                isPerm = false;
            } else {
                mulligan = true;
            }
        }
    });

    return isPerm;
}


// tests
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');