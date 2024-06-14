import LinkedList from '@code/DoublyLinkedList';
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
        try {
            list.insertAt(0, 1);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
});
