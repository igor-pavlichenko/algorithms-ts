/**
 * we are given the head/root of the tree, and we need to visit all the nodes and
 * return them in "pre order"
 */
export default function pre_order_search(head: BinaryNode<number>): number[] {
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
    path.push(curr.value);

    // recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // post
    return path;
}
