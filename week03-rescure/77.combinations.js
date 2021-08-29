/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */


 const helper = function(level,n,res,list,k){
    if(level === n+1){
        if(list.length === k){
            res.push([...list])
        }
        return
    } 

    helper(level+1,n,res,list,k)
    list.push(level)
    helper(level+1,n,res,list,k)
    list.pop()

 }
var combine = function(n, k) {
    const res = []
    helper(1,n,res,[],k)
    return res
};