/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let endReachable = nums.length - 1
    for(let i= nums.length -1;i>=0;i--){
        if(nums[i] + i>= endReachable){
            endReachable = i
        }
    }

    return endReachable == 0
};