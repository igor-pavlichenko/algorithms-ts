/**
 * complexities:
 * prepend: O(n)
 * insertAt: O(n)
 * append: O(1)
 * remove: O(n)
 * get: O(1)
 * removeAt: O(n)
 */
export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private array: Array<T>;

    constructor(initialCapacity: number) {
        this.length = 0;
        this.capacity = initialCapacity;
        this.array = Array(this.capacity);
    }

    private doubleCapacity() {
        this.capacity *= 2;
        const newArray = Array(this.capacity);
        for (let i = 0; i < this.array.length; i++) {
            // copy items to new array
            newArray[i] = this.array[i];
        }
        // swap arrays
        this.array = newArray;
    }

    prepend(item: T) {
        // prepending is the same as inserting at index 0
        return this.insertAt(item, 0);
    }

    insertAt(item: T, idx: number) {
        if (this.length === this.capacity) {
            this.doubleCapacity();
        }
        if (idx + 2 > this.capacity) return undefined; // this should've been an error

        // first item insert at index 0
        if (this.length === 0 && idx === 0) {
            this.array[idx] = item;
            this.length++;
            return;
        }

        // otherwise we need to shift elements to make space for new item at that index
        let i = this.length;
        while (i > idx) {
            // keep shifting elements to the end until we reach the provided index
            this.array[i] = this.array[i - 1];
            i--;
        }
        // we reached that index, and all elements have been shifted
        // it's safe to insert the item here
        this.array[idx] = item;
        this.length++;
        return;
    }

    append(item: T): void {
        if (this.length === this.capacity) {
            this.doubleCapacity();
        }

        this.array[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        let indexFound: number | undefined;
        for (let i = 0; i < this.length; i++) {
            if (this.array[i] === item) {
                indexFound = i;
                break;
            }
        }

        if (indexFound === undefined) return undefined;

        // we found the item and will "remove" it by
        // shift all consecutive items to fill the removed index
        return this.removeAt(indexFound);
    }

    // great access by index
    get(idx: number): T | undefined {
        if (idx >= this.length) return undefined;
        return this.array[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) return undefined;

        const item = this.array[idx];

        // shift all consecutive items to fill the removed index
        for (let i = idx; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.array[this.length - 1] = undefined as unknown as any;
        this.length--;

        return item;
    }

    toString() {
        let formattedString = '';
        for (let i = 0; i < this.length; i++) {
            formattedString += `[${this.array[i]}]`;
            if (i + 1 < this.capacity) {
                formattedString += ' - ';
            }
        }

        // print empty indexes
        for (let j = this.length - 1; j < this.capacity; j++) {
            formattedString += `[ ]`;
            if (j + 1 < this.capacity) {
                formattedString += ' - ';
            }
        }

        return formattedString;
    }
}
