/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp
    let b1 = s[0] === '0' ? 0 : 1
    let b2 = 1
    if(s.length === 1) return b1

    for(let i = 1;i<s.length;i++){
        dp = s[i] === '0' ? 0 : b1

        const cur2 = 10 * s[i-1] + 1 * s[i]
        dp += cur2>=10 && cur2<=26 ? b2 : 0

      
        b2 = b1
        b1 = dp
    }

    return dp
};
