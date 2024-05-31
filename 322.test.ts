import { coinChange } from './322';

const testFunction = coinChange;

type TestCase = { input: Parameters<typeof testFunction>; output: ReturnType<typeof testFunction> };
const testCases: TestCase[] = [
  // { input: [[1, 2, 5], 11], output: 3 },
  // { input: [[2], 3], output: -1 },
  // { input: [[1], 0], output: 0 },
  // { input: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10], output: 10 },
  // { input: [[4,5], 18], output: 4 },
  // { input: [[1,4,5], 18], output: 4 },
  { input: [[4, 5], 17], output: 4 },
  // { input: [[8,5], 20], output: 4 },
  // { input: [[186, 419, 83, 408], 6249], output: 20 },
  // { input: [[1,2,5], 11], output: 3 },
  // { input: [[1,2,5], 11], output: 3 },
];

describe('coinChange', () => {
  for (let testCase of testCases) {
    it(`${JSON.stringify(testCase.input)} => ${testCase.output}`, () => {
      expect(testFunction(...testCase.input)).toStrictEqual(testCase.output);
    });
  }
});
