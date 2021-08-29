/**
 * @param {character[][]} grid
 * @return {number}
 */

 var numIslands = function(grid) {
    let res = 0
    function helper(row,col,grid){
        grid[row][col] = "0"

        if (grid[row + 1] && grid[row + 1][col] === '1')helper(row + 1, col, grid)
        if (grid[row - 1] && grid[row - 1][col] === '1')helper(row - 1, col, grid)
        if (grid[row][col + 1] === '1')helper(row, col + 1, grid)
        if (grid[row][col - 1] === '1')helper(row, col - 1, grid)
    }
    for(let i = 0;i<grid.length;i++){
        for(let j = 0;j<grid[i].length;j++){
            if(grid[i][j] === '1'){
                helper(i,j,grid)
                res++
            }
        }
    }

    return res
};