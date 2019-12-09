/*
    Zero Matrix: Write an algorithm such that
    if an element in an MxN matrix is 0, its
    entire row and column are set to 0.
*/

// Time Complexity: O(n).
function zeroMatrix(matrix) {
    const rowsToZero = {};
    const colsToZero = {};

    matrix.forEach((row, i) => {
        row.forEach((val, j) => {
            if (val === 0) {
                rowsToZero[i] = true;
                colsToZero[j] = true;
            }
        });
    });

    Object.keys(rowsToZero).forEach(rowIndex => {
        matrix[rowIndex] = matrix[rowIndex].map(val => 0);
    });

    Object.keys(colsToZero).forEach(colIndex => {
        matrix.forEach((row) => {
            row[colIndex] = 0;
        });
    });

    return matrix;
}

// tests
console.log(zeroMatrix([
    ["a", 0, "a", "a"],
    ["b", "b", 0, "b"],
    ["c", "c", "c", "c"],
    ["d", "d", "d", "d"]
]));

/* return 
    [[0, 0, 0, 0],
    [0, 0, 0, 0],
    ["d", 0, 0, "a"],
    ["d", 0, 0, "a"]]
*/