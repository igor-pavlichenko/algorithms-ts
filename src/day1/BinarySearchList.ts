/**
 * Binary search is an efficient algorithm for finding an item from a sorted list of items.
 * It works by repeatedly dividing in half the portion of the list that could contain the item,
 * until you've narrowed down the possible locations to just one.
 *
 * Worst-case complexity: O(log n)
 * Best complexity: O(1)
 */
export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0; // start is inclusive
    let high = haystack.length; // end is exclusive, meaning we will go up to, but not including it

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
