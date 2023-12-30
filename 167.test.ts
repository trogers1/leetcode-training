import { twoSum } from './167';

const testFunction = twoSum;

type TestCase = { input: Parameters<typeof testFunction>; output: ReturnType<typeof testFunction> };
const testCases: TestCase[] = [
  { input: [[2, 7, 11, 15], 9], output: [1, 2] },
  { input: [[2, 3, 4], 6], output: [1, 3] },
  { input: [[-1, 0], -1], output: [1, 2] },
];

describe('twoSum', () => {
  for (let testCase of testCases) {
    it(`${JSON.stringify([...testCase.input])} => ${testCase.output}`, () => {
      expect(testFunction(...testCase.input)).toStrictEqual(testCase.output);
    });
  }
});
