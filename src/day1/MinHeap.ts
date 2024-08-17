export default class MinHeap {
    public length: number;
    private data: Array<number>;

    constructor() {
        this.length = 0;
        this.data = [];
    }

    private parentIdx(idx: number) {
        return Math.floor(idx / 2);
    }

    private leftChildIdx(idx: number) {
        return 2 * idx + 1;
    }

    private rightChildIdx(idx: number) {
        return 2 * idx + 2;
    }

    private heapifyUp(idx: number) {
        if (idx === 0) return;

        const curr = this.data[idx];
        const parentIdx = this.parentIdx(idx);
        const parent = this.data[parentIdx];

        if (parent > curr) {
            // swap current <-> parent
            this.data[idx] = parent;
            this.data[parentIdx] = curr;
            // keep heapifying up
            this.heapifyUp(parentIdx);
        }
    }

    private heapifyDown(idx: number) {
        const leftIdx = this.leftChildIdx(idx);
        const rightIdx = this.rightChildIdx(idx);

        if (idx >= this.length || leftIdx >= this.length) return;

        const currValue = this.data[idx];
        const leftValue = this.data[leftIdx];
        const rightValue = this.data[rightIdx];

        // find the smallest of 2 children, and if our value is smaller - swap them
        if (leftValue < rightValue && leftValue < currValue) {
            this.data[idx] = leftValue;
            this.data[leftIdx] = currValue;
            this.heapifyDown(leftIdx);
        } else if (rightValue < leftValue && rightValue < currValue) {
            this.data[idx] = rightValue;
            this.data[rightIdx] = currValue;
            this.heapifyDown(rightIdx);
        }
    }

    // - **insertion**
    // - insert it at last spot
    // - check if heap conditions are met
    // - if not, bubble it up and check again
    // complexity: O(log n)
    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    // - **deletion**
    // - after deleting a node, we have an empty spot in our tree
    // - so we find the last node, delete it, insert it in the empty spot
    // - heapify down
    // - in MinHeap we get the smallest of our two children and compare it to that
    // - if it's larger than the smallest child - swap & repeat
    // complexity: O(log n)
    pop(): number {
        if (this.length === 0) return -1; // error

        const output = this.data[0];

        if (this.length === 1) {
            this.data = [];
            this.length--;
            return output;
        }

        // move the last node to the root
        this.data[0] = this.data[this.length - 1];
        this.length--;
        // move it down until it finds it's place
        this.heapifyDown(0);
        // actually remove it from underlying array
        this.data = this.data.slice(0, this.length);
        return output;
    }

    // preserve method for existing tests
    delete() {
        return this.pop();
    }
}
