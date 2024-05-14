import two_crystal_balls from '@code/TwoCrystalBalls';

test('two crystal balls', function () {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
        data[i] = true;
    }

    expect(two_crystal_balls(data)).toEqual(idx);
    expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
});

test('two crystal balls - first floor', function () {
    const floors = [false, true, true, true, true, true, true, true, true];

    expect(two_crystal_balls(floors)).toEqual(1);
});

test('two crystal balls - zero-th floor', function () {
    const floors = [true, true, true, true, true, true, true, true, true];

    expect(two_crystal_balls(floors)).toEqual(0);
});
