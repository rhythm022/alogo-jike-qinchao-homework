/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return []
    const q = [[root]]
    const res = []

    while(q.length){
        const curLevelq = q.shift()

        let levelres = []
        let levelq = []

        curLevelq.forEach(({val,children})=>{
            levelres.push(val)
            children && children.forEach(c=>levelq.push(c))
        })
        levelq.length && q.push(levelq)
        res.push(levelres)
     
    }

    return res
};