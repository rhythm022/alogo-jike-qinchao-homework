/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n ===1 || n===2)return n
    let s1 = 1
    let s2 = 2

let s
    for(let i =3;i<=n;i++){
        s = s1 + s2
        s1 = s2
        s2 = s
    }

    return s
};