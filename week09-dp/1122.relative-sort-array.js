/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const rank = new Array(1001).fill(1001)
    for(let [index,val] of arr2.entries()){
        rank[val] = index
    }

    return arr1.sort((a,b)=>rank[a]!==rank[b]?rank[a]-rank[b]:a-b)

};
