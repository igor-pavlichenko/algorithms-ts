/**
 * we are given the head/root of the tree, and we need to visit all the nodes and
 * return them in "in order"
 */
export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // base case is when our node is non-existent
    if (!curr) {
        return path;
    }

    // recursion steps:
    // 1 - pre
    // 2 - recurse
    // 3 - post

    // pre

    // recurse
    walk(curr.left, path); // we go left
    path.push(curr.value); // we visit the node after going left
    walk(curr.right, path); // then we go right

    // post
    return path;
}
