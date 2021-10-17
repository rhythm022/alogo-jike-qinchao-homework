/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(str) {
    let po = 0
    let sign = 1
    let total = 0

    if(str.length === 0) return 0
    while(str[po] === ' ' && po<str.length){
        po++
    }

    if(str[po] === '+' || str[po] === '-'){
        sign = str[po] === '+' ? 1 : -1
        po++
    }
    while(po<str.length){
        let digi = str[po].codePointAt() - '0'.codePointAt() 
        if(digi < 0 || digi > 9) break
        total = total * 10 + digi
        po++
    }

    // if(sign * total > 2 ** 31 - 1){
    //     return 2 ** 31 - 1
    // }

    return Math.max(Math.min(sign*total,2 ** 31 - 1),-(2 ** 31) )
};