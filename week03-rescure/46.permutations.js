/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 const helper = function(level,nums,res,list,used){
    if(level === nums.length){
        res.push([...list])
        return
    }
    for(let val of nums){
        if(!used[val]){
           list.push(val)
           used[val] = 1
           helper(level+1,nums,res,list,used)
           list.pop()
           used[val] = 0
        }
    }
}
var permute = function(nums) {
   const res = []
   const used = {}
   helper(0,nums,res,[],used)
   return res
};