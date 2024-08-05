import { suggestedProducts, lexicographicalCompare } from './1268';

const testFunction = suggestedProducts;

type TestCase = { input: Parameters<typeof testFunction>; output: ReturnType<typeof testFunction> };
const testCases: TestCase[] = [
  {
    input: [['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'], 'mouse'],
    output: [
      ['mobile', 'moneypot', 'monitor'],
      ['mobile', 'moneypot', 'monitor'],
      ['mouse', 'mousepad'],
      ['mouse', 'mousepad'],
      ['mouse', 'mousepad'],
    ],
  },
  { input: [['havana'], 'havana'], output: [['havana'], ['havana'], ['havana'], ['havana'], ['havana'], ['havana']] },
  { input: [['havana', 'havanna'], 'havana'], output: [['havana', 'havanna'], ['havana', 'havanna'], ['havana', 'havanna'], ['havana', 'havanna'], ['havana', 'havanna'], ['havana']] },
];

describe('1268: canVisitAllRooms', () => {
  describe('canVisitAllRooms', () => {
    for (let testCase of testCases) {
      it(`${JSON.stringify(testCase.input)} => ${testCase.output}`, () => {
        expect(testFunction(...testCase.input)).toStrictEqual(testCase.output);
      });
    }
  });
  describe('lexicographicalCompare', () => {
    it('should compare single letter strings', () => {
      let result = ['a', 'b'].sort(lexicographicalCompare);
      let expected = ['a', 'b'];
      expect(result).toStrictEqual(expected);
      result = ['b', 'a'].sort(lexicographicalCompare);
      expected = ['a', 'b'];
      expect(result).toStrictEqual(expected);
      result = ['a', 'a'].sort(lexicographicalCompare);
      expected = ['a', 'a'];
      expect(result).toStrictEqual(expected);
    });
    it('should compare same-length strings', () => {
      let result = ['aaa', 'aab'].sort(lexicographicalCompare);
      let expected = ['aaa', 'aab'];
      expect(result).toStrictEqual(expected);
      result = ['aab', 'aaa'].sort(lexicographicalCompare);
      expected = ['aaa', 'aab'];
      expect(result).toStrictEqual(expected);
      result = ['aaaaaaa', 'aaabaaa'].sort(lexicographicalCompare);
      expected = ['aaaaaaa', 'aaabaaa'];
      expect(result).toStrictEqual(expected);
    });
    it('should compare diff-length strings', () => {
      let result = ['mouse', 'mousepad'].sort(lexicographicalCompare);
      let expected = ['mouse', 'mousepad'];
      expect(result).toStrictEqual(expected);
      result = ['mousepad', 'mouse'].sort(lexicographicalCompare);
      expected = ['mouse', 'mousepad'];
      expect(result).toStrictEqual(expected);
      result = ['wxyz', 'abc', 'hijkl'].sort(lexicographicalCompare);
      expected = ['abc', 'hijkl', 'wxyz'];
      expect(result).toStrictEqual(expected);
    });
  });
});
