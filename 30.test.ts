import { findSubstring } from './30';

const testFunction = findSubstring;

type TestCase = { input: Parameters<typeof testFunction>; output: ReturnType<typeof testFunction> };
const testCases: TestCase[] = [
  { input: ['barfoothefoobarman', ['foo', 'bar']], output: [0, 9] },
  { input: ['wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']], output: [] },
  { input: ['barfoofoobarthefoobarman', ['bar', 'foo', 'the']], output: [6, 9, 12] },
  { input: ['aaaaaa', ['a', 'a', 'a']], output: [0, 1, 2, 3] },
  { input: ['anopeaaaaaa', ['a', 'a', 'a']], output: [5, 6, 7, 8] },
  { input: ['barfoothefoobarman', ['foo', 'bar']], output: [0, 9] },
  { input: ['barfoothefoobarman', ['foo', 'bar']], output: [0, 9] },
  { input: ['barfoothefoobarman', ['foo', 'bar']], output: [0, 9] },
];

describe('findSubstring', () => {
  for (let testCase of testCases) {
    it(`${JSON.stringify(...testCase.input)} => ${testCase.output}`, () => {
      expect(testFunction(...testCase.input)).toStrictEqual(testCase.output);
    });
  }
});
