export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0; // start is inclusive
    let high = haystack.length; // end is exclusive

    do {
        const mid = Math.floor(low + (high - low) / 2); // need to know this formula
        const value = haystack[mid];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            // then throw out everything to the right
            high = mid;
        } else if (value < needle) {
            // then throw away everything to the left
            low = mid + 1; // no need to check mid again
        }
    } while (low < high);

    return false;
}
