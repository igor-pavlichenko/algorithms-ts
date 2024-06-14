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
        expect(list.length).toBe(1);
        expect(list.toString()).toBe('[1]');
    });
});
