/**
 * example maze:
 *
 *
 *
 *            ⬇ end here
 *      "#####  #"
 *      "#      #"
 *      "#  #####"
 *        ⬆ start here
 *
 *
 * use recursion... define base cases:
 * 1. off the map
 * 2. it's a wall
 * 3. it's the end
 * 4. if we have seen it
 *
 * remember that the entrance to the recursive function is often not the one we are going to recurse in
 *
 * @returns list of points from the start to the end
 */
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    return [];
}

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][]) {
    // 1. Base case
    // off the map
    if (
        // columns check
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        // rows check
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // it's a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // it's the end
    if (curr.x === end.x && curr.y === end.y) {
        return true;
    }

    // we have seen it
    // we could mutate the point to add a flag but that would be weird
    // instead, we'll pass around a 2D array with all coordinates we visited, true if we've seen it, false if we didn't
    if (seen[curr.y][curr.x]) {
        return false;
    }
}
