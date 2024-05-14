/**
 * Given 2 crystal balls and a 100 floor building. Find out the maximum height from which a ball
 * can be dropped without breaking in the most optimized way.
 *
 * Worst-case complexity: O(√n)
 * Best complexity: O(1)
 * @param floors
 */
export default function two_crystal_balls(floors: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(floors.length));

    let i = jumpAmount; // start at index we jumped to
    for (; i < floors.length; i += jumpAmount) {
        if (floors[i]) {
            break; // means our first crystal ball has broken
        }
    }

    // so now we "jump" back one jump, and start dropping the crystal ball one floor at a time
    i -= jumpAmount;
    // we could limit the amount of walking to "jumpAmount"
    // but we know for sure that it will break before reaching that anyway
    for (; i < floors.length; i++) {
        if (floors[i]) {
            return i;
        }
    }

    return -1; // in case it never breaks :D
}
