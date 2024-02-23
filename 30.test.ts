import { findSubstring, checkForPermutationSubstr } from './30';

const testFunction = findSubstring;

type TestCase = { input: Parameters<typeof testFunction>; output: ReturnType<typeof testFunction> };
const testCases: TestCase[] = [
  { input: ['foob', ['foo', 'bar']], output: [] },
  { input: ['foobar', ['foo', 'bar']], output: [0] },
  { input: ['nonononononobarfoo', ['foo', 'bar']], output: [12] },
  { input: ['barfoothefoobarman', ['foo', 'bar']], output: [0, 9] },
  { input: ['wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']], output: [] },
  { input: ['barfoofoobarthefoobarman', ['bar', 'foo', 'the']], output: [6, 9, 12] },
  { input: ['aaaaaa', ['a', 'a', 'a']], output: [0, 1, 2, 3] },
  { input: ['anopeaaaaaa', ['a', 'a', 'a']], output: [5, 6, 7, 8] },
  { input: ['aaaaaaaaaaaaaa', ['aa', 'aa']], output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  {
    input: [
      'abbaccaaabcabbbccbabbccabbacabcacbbaabbbbbaaabaccaacbccabcbababbbabccabacbbcabbaacaccccbaabcabaabaaaabcaabcacabaa',
      ['cac', 'aaa', 'aba', 'aab', 'abc'],
    ],
    output: [97],
  },
  // { input: ['barfoothefoobarman', ['foo', 'bar']], output: [0, 9] },
];

describe('findSubstring', () => {
  for (let testCase of testCases) {
    it(`${JSON.stringify(testCase.input)} => ${testCase.output}`, () => {
      expect(testFunction(...testCase.input)).toStrictEqual(testCase.output);
    });
  }
});

describe('checkForPermutationSubstr', () => {
  it('"abc", ["c", "b", "a"] => true', () => {
    expect(checkForPermutationSubstr('abc', ['c', 'b', 'a'])).toStrictEqual(true);
  });

  it('"aabcdcabc", ["abc", "cdc", "aab"] => true', () => {
    expect(checkForPermutationSubstr('aabcdcabc', ['abc', 'cdc', 'aab'])).toStrictEqual(true);
  });
  it('"abc", ["a", "b", "z"] => true', () => {
    expect(checkForPermutationSubstr('abc', ['a', 'b', 'z'])).toStrictEqual(false);
  });
});
