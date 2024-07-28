/**
 * binary search tree, also called an ordered or sorted binary tree,
 * is a rooted binary tree data structure with the key of each internal node
 * being greater than all the keys in the respective node's left subtree
 * and less than the ones in its right subtree.
 *
 * complexity: O(log n) - O(n)
 */
export default function dfs(head: BinaryNode<number> | null, needle: number): boolean {
    // base cases
    if (!head) return false;
    if (head.value === needle) return true;

    // recurse
    // if current nodes value is smaller than needle then check the right side
    if (head.value < needle) return dfs(head.right, needle);
    // else, means its greater than, so need to check left side
    return dfs(head.left, needle);
}
