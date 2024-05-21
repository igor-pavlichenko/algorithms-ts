export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private array: Array<T>;

    constructor(initialCapacity: number) {
        this.length = 0;
        this.capacity = initialCapacity;
        this.array = Array(this.capacity);
    }

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
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
        if (idx > this.length) return undefined;
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

    toString(): string {
        let formattedString = '';
        for (let i = 0; i < this.length; i++) {
            formattedString += `[${this.array[i]}]`;
            if (i + 1 < this.length) {
                formattedString += ' - ';
            }
        }
        return formattedString;
    }
}

