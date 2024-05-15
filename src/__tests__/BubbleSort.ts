import bubble_sort from '@code/BubbleSort';

test('bubble-sort', function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test('bubble sort bigger array', () => {
    const unsortedArray = [453, 45, 9, 3423, 6, 1, 45345, 45454, 1212, 1211, 1004, 5, 8, 0];
    const sortedArray = [0, 1, 5, 6, 8, 9, 45, 453, 1004, 1211, 1212, 3423, 45345, 45454];
    bubble_sort(unsortedArray);

    expect(unsortedArray).toEqual(sortedArray);
});
