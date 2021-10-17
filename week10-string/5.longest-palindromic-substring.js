/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(str) {
    let le = 0
    let maxLength = 0
    function extendPalindrome(str,i,j){
        while(i>=0 && j<str.length && str[i] ===str[j]){
            i--;j++
        }

        if(maxLength < j - i -1){
            le = i + 1
            maxLength = j - i - 1
        }
    }

    for(let n = 0;n < str.length ; n++){
        extendPalindrome(str,n,n)
        extendPalindrome(str,n,n+1)
    }

    return str.slice(le,le + maxLength)
};

