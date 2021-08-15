/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 const _preorder = function(res,root){
    if(!root) return
    res.push(root.val)

    for(child of root.children){
        _preorder(res,child)
    }
    
}

var preorder = function(root) {
    const res = []
    _preorder(res,root)
    return res
};






