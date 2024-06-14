type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    // complexity: O(1)
    prepend(item: T): void {
        const node: Node<T> = { value: item };
        this.length++;

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    // complexity: O(n)
    insertAt(item: T, idx: number): void {
        if (idx === 0) return this.prepend(item);
        if (idx === this.length) return this.append(item);

        if (idx > this.length) throw new Error('index is way out of bounds');
        const nodeAtIdx = this.getNodeAt(idx);
        if (!nodeAtIdx.prev)
            throw new Error('this will never happen since we already handled the idx=0 case');

        const newNode: Node<T> = { value: item };

        const left = nodeAtIdx.prev;
        const right = nodeAtIdx;

        newNode.next = right;
        newNode.prev = left;
        left.next = newNode;
        right.prev = newNode;

        this.length++;
    }

    private getNodeAt(index: number) {
        if (!this.head) throw new Error('head is undefined so the list is empty');

        let i = 0;
        let node = this.head;
        while (i < index) {
            // this shouldn't happen if length checks were done
            if (!node.next) throw new Error('node.next is undefined');
            node = node.next;
            i++;
        }
        return node;
    }

    // complexity: O(1)
    append(item: T): void {
        const newNode: Node<T> = { value: item };
        this.length++;
        if (!this.tail) {
            // means list is empty
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    remove(item: T): T | undefined {
        return undefined;
    }

    get(idx: number): T | undefined {
        return undefined;
    }

    removeAt(idx: number): T | undefined {
        return undefined;
    }
}
