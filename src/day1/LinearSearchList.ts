/**
 * A linear search is the simplest method of searching. It sequentially checks each
 * element of the list until a match is found or the whole list has been searched.
 *
 * Worst-case complexity: O(n)
 * Average complexity: O(n)
 * Best-case performance: O(1)
 */
export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; i++) {
        const element = haystack[i];
        if (element === needle) return true;
    }
    return false;
}
