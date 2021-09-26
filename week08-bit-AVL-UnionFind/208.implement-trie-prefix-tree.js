/**
 * Initialize your data structure here.
 */
 var Trie = function() {
    this.hash = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.hash
    for(let i = 0;i<word.length;i++){
        const ch = word[i]
        if(!cur[ch])cur[ch] = {}

        cur = cur[ch]
    }
    cur.END = word

};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.hash
    for(let i = 0;i<word.length;i++){
        const ch = word[i]
        if(cur[ch])cur = cur[ch]
        else return false

        
    }
    return !!cur.END
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
        let cur = this.hash
    for(let i = 0;i<prefix.length;i++){
        const ch = prefix[i]
        if(cur[ch])cur = cur[ch]
        else return false

        
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */