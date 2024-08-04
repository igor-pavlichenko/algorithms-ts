export default function BSTInsert(node: BinaryNode<number>, value: number) {
    const newNode: BinaryNode<number> = { value, left: null, right: null };
    if (node.value < value) {
        // value is bigger so we need to walk to the right side
        if (node.right) {
            BSTInsert(node.right, value);
        } else {
            // but if right is null - we found a place to insert
            node.right = newNode;
        }
    } else if (node.value >= value) {
        // value is equal or smaller so we need to walk to the left side
        if (node.left) {
            BSTInsert(node.left, value);
        } else {
            // but if left is null - we found a place to insert
            node.left = newNode;
        }
    }
}
