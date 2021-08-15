/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const hash = {}

    for(str of strs){
       const k = str.split('').sort().join();
        (hash[k] || (hash[k] = [])).push(str);
    }

    return Object.values(hash)
};