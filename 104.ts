/**
 * 104. Maximum Depth of Binary Tree
 * Given the root of a binary tree, return its maximum depth.

 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * 
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100
*/

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  function findDepth(currNode: TreeNode | null, currDepth: number): number {
    // console.log({findDepth: true, currNode, currDepth})
    if (!currNode) {
      // console.log(`!currNode, returning ${currDepth}`)
      return currDepth;
    }
    currDepth++;
    // console.log({currD: '++', currDepth})
    const leftDepth = currNode.left ? findDepth(currNode.left, currDepth) : currDepth;
    const rightDepth = currNode.right ? findDepth(currNode.right, currDepth) : currDepth;
    // console.log({leftDepth, rightDepth, currDepth})
    return rightDepth >= leftDepth ? rightDepth : leftDepth;
  }
  return findDepth(root, 0);
}
