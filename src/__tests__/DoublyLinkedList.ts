import LinkedList, { ListErrors } from '@code/DoublyLinkedList';
import { test_list } from './ListTest';

test('DoublyLinkedList', function () {
    const list = new LinkedList<number>();
    test_list(list);
});

describe('DoublyLinkedList tests', () => {
    test('append', () => {
        const list = new LinkedList<number>();
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.length).toBe(3);
        expect(list.toString()).toBe('[1] - [2] - [3]');
    });

    test('prepend', () => {
        const list = new LinkedList<number>();
        list.prepend(1);
        list.append(2);
        list.append(3);
        list.prepend(4);
        expect(list.length).toBe(4);
        expect(list.toString()).toBe('[4] - [1] - [2] - [3]');
    });

    test('insertAt', () => {
        const list = new LinkedList<number>();
        list.prepend(1);
        list.prepend(2);
        list.prepend(3);
        list.append(1);
        list.append(2);
        list.append(3);
        list.insertAt(0, 3);
        expect(list.length).toBe(7);
        expect(list.toString()).toBe('[3] - [2] - [1] - [0] - [1] - [2] - [3]');
    });

    test('insertAt error', () => {
        const list = new LinkedList<number>();
        expect(() => list.insertAt(0, 1)).toThrow();
    });

    test('remove errors', () => {
        const list = new LinkedList<number>();
        expect(() => list.remove(0)).toThrowError(ListErrors.LIST_EMPTY);

        list.append(1);
        expect(() => list.remove(0)).toThrowError(ListErrors.ITEM_NOT_FOUND);
    });

    test('remove', () => {
        const list = new LinkedList<number>();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);

        expect(list.remove(3)).toEqual(3);
        expect(list.length).toEqual(4);
        expect(list.toString()).toEqual('[1] - [2] - [4] - [5]');

        expect(list.remove(1)).toEqual(1);
        expect(list.length).toEqual(3);
        expect(list.toString()).toEqual('[2] - [4] - [5]');

        expect(list.remove(5)).toEqual(5);
        expect(list.length).toEqual(2);
        expect(list.toString()).toEqual('[2] - [4]');

        list.remove(2);
        list.remove(4);
        expect(list.length).toEqual(0);
        expect(list.toString()).toEqual('');
    });
});
