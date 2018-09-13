const sum = require('./sum.js');

test('adds 1+2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});

test('add 3+4 to equal 7', () => {
  expect(sum.sum(3, 4)).toBe(8);
})