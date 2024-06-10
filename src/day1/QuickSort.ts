/**
 * Quicksort is a divide-and-conquer algorithm.
 * It works by selecting a 'pivot' element from the array
 * and partitioning the other elements into two sub-arrays,
 * according to whether they are less than or greater than the pivot.
 * For this reason, it is sometimes called partition-exchange sort.
 * The sub-arrays are then sorted recursively. This can be done in-place,
 * requiring small additional amounts of memory to perform the sorting.
 * 
 * Usually split into 2 functions:
 * - partition - produces the pivot index and moves
 * 				the items that are <= to one side and
 * 				the items that are > to the other side
 * 
 * - qs - calls partition, gets the pivot, recalls quick_sort, handles base cases
 * 
 * Complexity: O(n*log(n))
 */
export default function quick_sort(arr: number[]): void {
	qs(arr, 0, arr.length - 1);
}

/**
 * 
 * @param arr 
 * @param lo abbreviation of LOW
 * @param hi abbreviation of HIGH
 */
function qs(arr: number[], lo: number, hi: number) {
	
}

function partition(arr: number[], lo: number, hi: number): number {
	
	return 0;
}