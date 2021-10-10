/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const t2s = {}
    const s2t = {}
    for(let i = 0;i<s.length;i++){
        const s_ch = s[i]
        const t_ch = t[i]

        if(s2t[s_ch] && s2t[s_ch] !== t_ch)return false

        if(t2s[t_ch] && t2s[t_ch] !== s_ch)return false

        t2s[t_ch] = s_ch
        s2t[s_ch] = t_ch
     
    } 

    return true
};
