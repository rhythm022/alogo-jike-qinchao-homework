/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let le = 0
    let ri = s.length - 1
    while(le<=ri && s[le] === ' '){le++}
    while(le<=ri && s[ri] === ' '){ri--}

    const q = []
    let word = ''

    while(le<=ri){
        if(s[le] === ' ' && word){
            q.unshift(word)
            word = ''
        }else if(s[le] !== ' '){
            word += s[le]
        }
        le++
    }
    q.unshift(word)

    return q.join(' ')
};