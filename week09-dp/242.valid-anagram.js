/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const a = 'a'.codePointAt(0)
    const hash = new Array(26).fill(0)

    for(let i =0;i< s.length;i++){
        hash[s.codePointAt(i)-a]++
        hash[t.codePointAt(i)-a]--
    }

    for(h of hash){
        if(h !==0)return false
    }
    return true
};
