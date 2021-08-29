/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

 const helper = function(preorder, inorder,hash){
  if (!inorder.length) return null;
  const currentVal = preorder.shift()

  let node = new TreeNode(currentVal);
  let index = inorder.indexOf(currentVal);
  node.left = buildTree(preorder, inorder.slice(0, index));
  node.right = buildTree(preorder, inorder.slice(index + 1));
  return node;
}
var buildTree = function(preorder, inorder) {
  return helper(preorder, inorder)
};