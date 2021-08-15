/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var _preorderTraversal = function(res,root) {
    if(!root) return 

    res.push(root.val)
    _preorderTraversal(res,root.left)
    _preorderTraversal(res,root.right)


};
var preorderTraversal = function(root) {
    const res = []

    _preorderTraversal(res,root)

    return res

};
