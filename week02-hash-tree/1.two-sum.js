/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const hash = {}

    for([index,num] of nums.entries()){
        if(target - num in hash){
            return [hash[target - num],index]
        }
        hash[num] = index
    }

    return []
};