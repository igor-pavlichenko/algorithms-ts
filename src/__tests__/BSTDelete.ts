import BSTDelete from '@code/BSTDelete';
import { tree } from './tree';

test('delete on BST - removing a node with no children', function () {
    const testTree = structuredClone(tree);

    BSTDelete(testTree, 7);
    expect(testTree.left?.left?.right).toBeNull();
});

test('delete on BST - removing a node with one child', function () {
    const testTree = structuredClone(tree);

    BSTDelete(testTree, 5);
    expect(testTree.left?.left?.value).toEqual(7);
});

test('delete on BST - removing a node with two children', function () {
    const testTree = structuredClone(tree);

    BSTDelete(testTree, 50);
    expect(testTree.right?.value).toEqual(45);
    expect(testTree.right?.right?.value).toEqual(100);
    expect(testTree.right?.left?.value).toEqual(30);
    expect(testTree.right?.left?.right).toBeNull();
});
