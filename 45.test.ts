import { jump } from './45';

const testCases: { input: number[]; output: number }[] = [
  { input: [2, 3, 1, 1, 4], output: 2 },
  { input: [2, 3, 0, 1, 4], output: 2 },
  { input: [1], output: 1 },
  { input: [1, 4, 10, 1, 5, 1, 1, 1, 1, 1], output: 3 },
  { input: [1, 4, 10, 1, 3, 1, 1, 5, 1, 1, 1, 1], output: 3 },
  { input: [3, 1, 6, 1, 4, 1, 1, 5, 2, 3], output: 3 },
];

describe('jump II', () => {
  for (let testCase of testCases) {
    it(`${JSON.stringify(testCase.input)} => ${testCase.output}`, () => {
      expect(jump(testCase.input)).toStrictEqual(testCase.output);
    });
  }
});
