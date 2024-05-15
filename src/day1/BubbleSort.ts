/**
 * Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm
 * that repeatedly steps through the input list element by element, comparing
 * the current element with the one after it, swapping their values if needed.
 *
 * Worst-case complexity: O(n^2)
 * Best complexity: O(n)
 * Average complexity: O(n^2)
 */
export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        // remember to subtract "- 1 - i" because every iteration
        // the biggest number gets sorted to the end, so no need to keep comparing them
        for (let j = 0; j < arr.length - 1 - i; j++) {
            const current = arr[j];
            const next = arr[j + 1];
            if (current > next) {
                // swap them
                arr[j + 1] = current;
                arr[j] = next;
            }
        }
    }
}
