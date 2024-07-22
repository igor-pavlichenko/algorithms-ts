export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // base cases
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;
    if (a.value !== b.value) return false;

    // it will keep checking base cases on left subtree & right subtree and
    // if it reaches both null ends returning true then they are equal
    return compare(a.left, b.left) && compare(a.right, b.right);
    // it's depth first because it will go all the way left first
}
