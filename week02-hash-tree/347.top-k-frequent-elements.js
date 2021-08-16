/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const hash = {}
    nums.forEach(it=>{
        if(!hash[it])return  hash[it] = 1
        hash[it]++
    })

    return Object.entries(hash).sort((b,a)=>a[1]-b[1]).slice(0,k).map(a=>a[0])
};