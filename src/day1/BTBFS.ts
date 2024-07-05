import Queue from './Queue';

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = new Queue<typeof head>();
    q.enqueue(head);

    while (q.length) {
        const curr = q.deque();
        const left = curr?.left;
        const right = curr?.right;

        // search
        if (curr?.value === needle) return true;

        // keep traversing by enqueueing left & right of the node
        if (left) q.enqueue(left);
        if (right) q.enqueue(right);
        // by doing this the wile loop will keep going
    }

    // if we get to this point - we have traversed the whole tree
    // and didn't find the needle
    return false;
}

// alternative implementation with nil check AFTER enqueueing
export function bfs2(head: BinaryNode<number>, needle: number): boolean {
    const q = new Queue<typeof head | null | undefined>();
    q.enqueue(head);

    while (q.length) {
        const curr = q.deque();

        if (!curr) continue; // this jumps over 1 iteration cycle

        // search
        if (curr?.value === needle) return true;

        // keep traversing by enqueueing left & right of the node
        q.enqueue(curr.left);
        q.enqueue(curr.right);
        // by doing this the wile loop will keep going
    }

    // if we get to this point - we have traversed the whole tree
    // and didn't find the needle
    return false;
}
