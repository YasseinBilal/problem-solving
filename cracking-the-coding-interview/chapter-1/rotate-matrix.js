/*
    Rotate Matrix: Given an image represented
    by an NxN matrix, where each pixel in the image 
    is 4 bytes, write a method to rotate the image by
    90 degrees. Can you do this in place?
*/

// Time Complexity: O(n).
function rotateMatrix(matrix) {
    const N = matrix.length - 1;
    const result = matrix.map((row, i) => {
        return row.map((val, j) => {
            return matrix[N - j][i];
        })
    });
    return [...result];    
}

// tests
console.log(rotateMatrix([
    ["a", "a", "a", "a"],
    ["b", "b", "b", "b"],
    ["c", "c", "c", "c"],
    ["d", "d", "d", "d"]
]));

/* return 
    [["d", "c", "b", "a"],
    ["d", "c", "b", "a"],
    ["d", "c", "b", "a"],
    ["d", "c", "b", "a"]]
*/
