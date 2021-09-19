/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    function helper(i,j,n,str){
        if(i === n && j === n){
            res.push(str)
            return
        }

        if(i<n){
            helper(i+1,j,n,str+'(')
        }

        if(j<i){
            helper(i,j+1,n,str+')')
        }

    }

    helper(0,0,n,'')
    return res
};