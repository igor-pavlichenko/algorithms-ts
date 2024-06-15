export enum ListErrors {
    INDEX_OUT_OF_BOUNDS = 'index out of bounds',
    EDGE_CASE = 'this will never happen since we already handled the idx=0 case',
    ITEM_NOT_FOUND = 'item not found',
    LIST_EMPTY = 'list is empty',
}
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

        if (idx < 0 || idx > this.length) throw new Error(ListErrors.INDEX_OUT_OF_BOUNDS);
        const nodeAtIdx = this.getNodeAt(idx);
        if (!nodeAtIdx.prev) throw new Error(ListErrors.EDGE_CASE);

        const newNode: Node<T> = { value: item };

        const left = nodeAtIdx.prev;
        const right = nodeAtIdx;

        newNode.next = right;
        newNode.prev = left;
        left.next = newNode;
        right.prev = newNode;

        this.length++;
    }

    // complexity: O(n)
    private getNodeAt(index: number) {
        if (!this.head) throw new Error(ListErrors.LIST_EMPTY);

        let i = 0;
        let node = this.head;
        while (i < index && node.next) {
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
            return;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    // complexity: O(n)
    remove(item: T): T | undefined {
        if (!this.length || !this.head) throw new Error(ListErrors.LIST_EMPTY);

        let curr: Node<T> | undefined = this.head;
        for (let i = 0; i < this.length; i++) {
            // with this loop, it either finds the item,
            // or reaches tail and assigns .next to curr which is undefined
            if (curr?.value == item) {
                break;
            }
            curr = curr?.next;
        }
        if (!curr) {
            throw new Error(ListErrors.ITEM_NOT_FOUND);
        }

        this.length--;
        if (this.length === 0) {
            this.tail = this.head = undefined;
        }

        const left = curr.prev;
        const right = curr.next;

        if (curr === this.head) this.head = right;
        if (curr === this.tail) this.tail = left;

        if (left) left.next = right;
        if (right) right.prev = left;
        curr.next = curr.prev = undefined;

        return curr.value;
    }

    // complexity: O(n)
    get(idx: number): T | undefined {
        if (this.length === 0 || !this.head || !this.tail) {
            // redundant/equivalent checks to make typescript happy
            throw new Error(ListErrors.LIST_EMPTY);
        }
        if (idx < 0 || idx >= this.length) throw new Error(ListErrors.INDEX_OUT_OF_BOUNDS);

        if (idx === 0) return this.head.value;
        if (idx === this.length - 1) return this.tail.value;
        return this.getNodeAt(idx).value;
    }

    removeAt(idx: number): T | undefined {
        return undefined;
    }

    // complexity O(n)
    toString() {
        let str = '';
        let curr = this.head;
        for (let i = 0; i < this.length && curr; i++) {
            str += `[${curr.value}]`;
            if (curr.next) {
                str += ` - `;
            }
            curr = curr.next;
        }
        return str;
    }
}
