/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    if(!nums || !nums.length) return 0
    return mergeSort(nums,0,nums.length - 1) 
};

function mergeSort(nums,left,right){
    if(left>=right)return 0
    const brok = (left+right)>>1
    let count = mergeSort(nums,left,brok) + mergeSort(nums,brok+1,right)
    const new_array = []
    let i = left
    let i_2 = left
    let new_index = 0
    for(let j = brok+1;j<=right;j++){
        while(i_2<=brok && nums[i_2] / 2 <= nums[j]) ++i_2
        while(i<=brok && nums[i]<nums[j])new_array[new_index++] = nums[i++]
        new_array[new_index++] = nums[j]
        count += brok - (i_2 - 1)
    }

    while(i<=brok)new_array[new_index++] = nums[i++]
    for(let i = 0;i<new_array.length;i++){
        nums[left+i] = new_array[i]
    }

    return count
}
