/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let j = 0
    nums.forEach((num,i)=>{
        if(num !== 0){
                const tmp = nums[j]
                nums[j] = num
                nums[i] = tmp
                j++
            }
    })

};