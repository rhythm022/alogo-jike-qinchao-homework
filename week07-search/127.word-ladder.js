/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    wordList = new Set(wordList)
    let begin = new Set([beginWord])
    let end = new Set([endWord])
    if(!wordList.has(endWord))return 0
    let distance = 1

    while(begin.size && end.size){
        const new_set = new Set()
        if(begin.size > end.size)[begin,end] = [end,begin]
        for(let word of begin){
            for(let j = 0;j<word.length;j++){
                for(let i = 0;i<26;i++){
                    const ch = String.fromCharCode(i+97)
                    const new_word = word.slice(0,j)+ch+word.slice(j+1)
                    if(end.has(new_word)) return distance + 1
                    if(wordList.has(new_word)){
                        wordList.delete(new_word)
                        new_set.add(new_word)
                    }
                }
            }
        }
        begin = new_set
        distance++
    }
    return 0
};