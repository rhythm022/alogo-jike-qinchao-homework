/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let i = m -1
    let j = n -1

    let k = m+n -1 
    while(i !== -1 && j !== -1){
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--]
    }

    for(let s = j;s>=0;s--){
        nums1[s] = nums2[s]
    }


    return nums1 
};