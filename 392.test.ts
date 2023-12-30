import isSubsequence from './392';

const testFunction = isSubsequence;

type TestCase = { input: Parameters<typeof testFunction>; output: ReturnType<typeof testFunction> };
const testCases: TestCase[] = [
  { input: ['string', 'stringy'], output: true },
  { input: ['abc', 'ahbgdc'], output: true },
  { input: ['axc', 'ahbgdc'], output: false },
];

describe('isSubsequence', () => {
  for (let testCase of testCases) {
    it(`${JSON.stringify(testCase.input)} => ${testCase.output}`, () => {
      expect(testFunction(...testCase.input)).toStrictEqual(testCase.output);
    });
  }
});
