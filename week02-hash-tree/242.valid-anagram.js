/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length!== t.length) return false

const dict = {}
    for(let i = 0;i<s.length;i++){
        dict[s[i]] === undefined ? dict[s[i]] = 1 : dict[s[i]]++
        dict[t[i]] === undefined ? dict[t[i]] = -1 : dict[t[i]]--
    }
    
    for(key in dict){
        if(dict[key] !== 0)return false
    }

    return true
};