/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if(n <= 0 ) return false
    n = n & (n-1)
    return n === 0
};