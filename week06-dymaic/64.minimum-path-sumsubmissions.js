/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    const ylength = grid.length
    const xlength = grid[0].length
    const dp = grid
    for(let y = ylength-1;y>=0;y--){
         for(let x = xlength -1;x>=0;x--){
            if(y === ylength - 1 && x === xlength - 1){
                continue
            }else if(y === ylength - 1){
                dp[y][x] += grid[y][x+1]

            }else if(x === xlength - 1){
                dp[y][x] += grid[y+1][x]

            }else{
                dp[y][x] += Math.min(grid[y+1][x],grid[y][x+1])

            }
            
       }
    }

    return dp[0][0]
};