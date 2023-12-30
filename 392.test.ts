import isSubsequence from './392';

const testFuntion = isSubsequence;

type TestCase = { input: Parameters<typeof testFuntion>; output: ReturnType<typeof testFuntion> };
const testCases: TestCase[] = [
  { input: ['string', 'stringy'], output: true },
  { input: ['abc', 'ahbgdc'], output: true },
  { input: ['axc', 'ahbgdc'], output: false },
];

describe('isSubsequence', () => {
  for (let testCase of testCases) {
    it(`${JSON.stringify(testCase.input)} => ${testCase.output}`, () => {
      expect(testFuntion(...testCase.input)).toStrictEqual(testCase.output);
    });
  }
});
