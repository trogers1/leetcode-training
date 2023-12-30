import { isPalindrome } from './125';

const testFunction = isPalindrome;

type TestCase = { input: Parameters<typeof testFunction>; output: ReturnType<typeof testFunction> };
const testCases: TestCase[] = [
  { input: ['A man, a plan, a canal: Panama'], output: true },
  { input: ['race a car'], output: false },
  { input: [' '], output: true },
  { input: ['h_an( )na.h'], output: true },
  { input: ['...'], output: true },
  { input: ['_wher_eh.w'], output: true },
];

describe('isPalindrome', () => {
  for (let testCase of testCases) {
    it(`${JSON.stringify(...testCase.input)} => ${testCase.output}`, () => {
      expect(testFunction(...testCase.input)).toStrictEqual(testCase.output);
    });
  }
});
