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
 * when to use recursion: when it's not easy to do with simple for loops
 * especially when there is a branching factor, like in the coordinates case,
 * there are 4 directions we can go at any point
 *
 * @returns list of points from the start to the end
 */
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    // fill the seen array with false values
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[], // we need to keep track of the steps we are taking
) {
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
        path.push(end);
        return true;
    }

    // we have seen it
    // we could mutate the point to add a flag but that would be weird
    // instead, we'll pass around a 2D array with all coordinates we visited, true if we've seen it, false if we didn't
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 2. recurse - 3 steps
    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);
    // recurse
    for (let i = 0; i < directions.length; i++) {
        const [x, y] = directions[i];
        if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
            return true;
        }
    }

    // post
    path.pop();
    return false; // if we walked everywhere and didn't find an end
}

const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];
