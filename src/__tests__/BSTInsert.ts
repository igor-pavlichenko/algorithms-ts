import BSTInsert from '@code/BSTInsert';
import { tree } from './tree';

test('BST insert value equal to root', function () {
    expect(tree.left?.right?.right).toBeNull();
    BSTInsert(tree, 20);
    expect(tree.left?.right?.right?.value).toEqual(20);
});

test('BST insert value greater than root', function () {
    expect(tree.right?.left?.left?.left).toBeNull();
    BSTInsert(tree, 21);
    expect(tree.right?.left?.left?.left?.value).toEqual(21);
});
