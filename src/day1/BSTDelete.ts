// complexity depends on height: O(h)
export default function BSTDelete(tree: BinaryNode<number> | null, target: number) {
    tree = dfDelete(tree, target);
}

function dfDelete(node: BinaryNode<number> | null, target: number) {
    // find the target

    // base case 1 - empty tree
    if (!node) return node;

    if (target < node.value) {
        // base case 2 - target < value
        // so we recurse to the left subtree
        node.left = dfDelete(node.left, target);
        return node;
    } else if (target > node.value) {
        // base case 3 - target > value
        // so we recurse to the right subtree
        node.right = dfDelete(node.right, target);
        return node;
    } else {
        // base case 4 - target = value

        // we found the node to be deleted
        // and we know that this code will be run in recursive calls
        // meaning that parent.left or parent.right will be assigned
        // the return value of this block

        // case 1 - no children
        if (!node.left && !node.right) {
            return null; // node deleted by simply assigning null
        }

        // case 2 - single child
        // return the only child to be assigned to parent's left/right
        else if (!node.left) {
            return node.right;
        } else if (!node.right) {
            return node.left;
        } else {
            // case 3 - two children
            // find a leaf node to replace the current node's value
            const replacement = getLargestOnSmallSide(node.left);
            dfDelete(node.left, replacement.value);
            node.value = replacement.value;
            return node;
        }
    }
}

function getLargestOnSmallSide(left: BinaryNode<number>) {
    let curr = left;
    while (curr.right) {
        curr = curr.right;
    }
    return curr;
}
