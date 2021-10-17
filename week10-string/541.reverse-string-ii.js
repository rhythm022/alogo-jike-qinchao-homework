/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    const arr = Array.from(s)
    for(let i =0;i<arr.length;i+=2*k){
        reverse(arr,i,Math.min(i+k,arr.length)-1)
    }
    return arr.join('')
};


function reverse(arr,start,end){
    while(start<end){
        const tmp = arr[start]
        arr[start] = arr[end]
        arr[end] = tmp

        ++start
        --end
    }
}