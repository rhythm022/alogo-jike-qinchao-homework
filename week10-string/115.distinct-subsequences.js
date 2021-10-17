/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var numDistinct = function(str, substr) {
    const dp = new Array(substr.length + 1).fill().map(()=>new Array(str.length + 1).fill(0))

    for(let x = 0;x<=str.length;x++){
        dp[0][x] = 1
    }
    for(let y = 1;y<=substr.length;y++){
        for(let x = 1;x<=str.length;x++){
            if(str[x-1] === substr[y-1]){
                dp[y][x] = dp[y-1][x-1] +dp[y][x-1]
            }else{
                dp[y][x] = dp[y][x-1]

            }
        }
    }
    return dp[substr.length][str.length]
};