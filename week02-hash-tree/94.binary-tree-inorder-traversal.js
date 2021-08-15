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

 var _inorderTraversal = function(res,root) {
    if(!root) return 

    _inorderTraversal(res,root.left)
    res.push(root.val)
    _inorderTraversal(res,root.right)


};
var inorderTraversal = function(root) {
    const res = []

    _inorderTraversal(res,root)

    return res

};

