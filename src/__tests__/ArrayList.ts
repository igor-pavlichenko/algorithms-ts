import ArrayList from '@code/ArrayList';
import { test_list } from './ListTest';

test('array-list', function () {
    const list = new ArrayList<number>(3);
    test_list(list);
});

test('array-list dynamic capacity', function () {
    const list = new ArrayList<number>(3);
    list.append(1);
    list.append(1);
    list.append(1);
    expect(list.length).toEqual(3);

    list.append(2);
    expect(list.length).toEqual(4);
    expect(list.get(3)).toEqual(2);
});

test('array-list toString', function () {
    const list = new ArrayList<number>(3);
    list.append(1);
    list.append(1);
    list.append(1);
    list.append(2);
    expect(list.toString()).toEqual('[1] - [1] - [1] - [2] - [ ] - [ ]');
});
