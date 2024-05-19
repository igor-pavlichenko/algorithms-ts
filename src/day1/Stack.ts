type Node<T> = {
    value: T;
    prev?: Node<T>;
};
/**
 * The stack data structure is a linear data structure that accompanies a principle
 * known as LIFO (Last In First Out) or FILO (First In Last Out)
 */
export default class Stack<T> {
    private head?: Node<T>;
    public length: number;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const newNode: Node<T> = { value: item };
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.prev = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    pop(): T | undefined {
        if (!this.head) return undefined;

        this.length--;
        const oldHead = this.head;
        this.head = this.head.prev;
        return oldHead.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
