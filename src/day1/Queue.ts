type Node<T> = {
    value: T;
    next?: Node<T>;
};
/**
 * A queue is a linear data structure that stores the elements sequentially.
 * It uses the FIFO (First In First Out) approach for accessing elements.
 *
 * Search complexity:   O(n)
 * Insert complexity:   O(1)
 * Delete complexity:   O(1)
 * Space complexity:    O(n)
 */
export default class Queue<T> {
    private head?: Node<T>;
    private tail?: Node<T>;
    public length: number;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode: Node<T> = { value: item };
        this.length++;
        // (in another language we could check length instead, but for typescript we must check for nulls)
        if (!this.tail) {
            // means the queue is empty
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    deque(): T | undefined {
        if (!this.head) return undefined;

        this.length--;
        const tempHead = this.head;
        this.head = this.head.next;

        // in langs without garbage collector
        tempHead.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return tempHead.value;
    }

    // get head's value
    peek(): T | undefined {
        return this.head?.value;
    }
}
