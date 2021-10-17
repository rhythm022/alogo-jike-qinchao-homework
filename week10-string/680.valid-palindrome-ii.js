/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(str) {
    str = str.toUpperCase()

    return isSame(str,0,str.length-1,false)
};

function isSame(str,le,ri,once){
    if(le >= ri) return true
    if(str[le] === str[ri]){
        return isSame(str,le+1,ri-1,once)
    }else if(once === false){
        return isSame(str,le,ri-1,true) || isSame(str,le+1,ri,true)
    }else{
        return false
    }
}