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

