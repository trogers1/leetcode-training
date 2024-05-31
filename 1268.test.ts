import { suggestedProducts } from './1268';

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
  { input: [['havanna'], 'havana'], output: [['havana'], ['havana'], ['havana'], ['havana'], ['havana'], ['havana']] },
];

describe('canVisitAllRooms', () => {
  for (let testCase of testCases) {
    it(`${JSON.stringify(testCase.input)} => ${testCase.output}`, () => {
      expect(testFunction(...testCase.input)).toStrictEqual(testCase.output);
    });
  }
});
