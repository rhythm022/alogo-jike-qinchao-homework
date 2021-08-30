/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
    wordList = new Set(wordList)
    if(!wordList.has(endWord)) return 0
    let q1 = new Set([beginWord])
    let q2 = new Set([endWord])
    let step = 0

    while(q1.size && q2.size){
        ++step
        if(q1.size > q2.size)[q1,q2] = [q2,q1]
        
        const q = new Set()

        for(const word of q1){
            for(let i = 0;i<endWord.length;i++){
                for(let charCode = 97;charCode<=122;charCode++){
                    const w = `${word.slice(0, i)}${String.fromCharCode(charCode)}${word.slice(i + 1)}`
                    if(q2.has(w)) return step + 1
                    if(wordList.has(w)){
                        wordList.delete(w)
                        q.add(w)
                    }
        
                }
            }
        }
        q1 = q
    }

    return 0
};