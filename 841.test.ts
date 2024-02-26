import { canVisitAllRooms } from './841';

const testFunction = canVisitAllRooms;

type TestCase = { input: Parameters<typeof testFunction>; output: ReturnType<typeof testFunction> };
const testCases: TestCase[] = [
  { input: [[[1],[2],[3],[]]], output: true },
  { input: [[[1,3],[3,0,1],[2],[0]]], output: false },
  { input: [[[], [0]]], output: false },
  { input: [[[1], [0]]], output: true },
  { input: [[[20], [0]]], output: false },
  { input: [[[1], [0, 2], []]], output: true }, // potential infinite loop
  { input: [[[1], [0, 3], [2, 4], [3], []]], output: false }, // all rooms are present, but not possible
  { input: [[[2], [3], [4], [5], [0], [1]]], output: false }, // Two paths, no overlap
];

describe('canVisitAllRooms', () => {
  for (let testCase of testCases) {
    it(`${JSON.stringify(testCase.input)} => ${testCase.output}`, () => {
      expect(testFunction(...testCase.input)).toStrictEqual(testCase.output);
    });
  }
});
