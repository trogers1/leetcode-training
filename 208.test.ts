// import all from './208';
//
// const testCases = [
//   {
//     input: [
//       ['Trie', 'insert', 'search', 'search', 'startsWith', 'insert', 'search'],
//       [[], ['apple'], ['apple'], ['app'], ['app'], ['app'], ['app']],
//     ],
//     output: [null, null, true, false, true, null, true],
//   },
// ];
//
// describe('Trie', () => {
//   for (let testCase of testCases) {
//     it(`${JSON.stringify(testCase.input)} => ${testCase.output}`, () => {
//       let tries = [];
//       for (let i = 0; i < testCase.input[0].length; i++) {
//         const callable = testCase.input[0][i];
//         const arg = testCase.input[1][i];
//         if (callable === 'Trie') {
//           tries.push(all[callable](...arg));
//         } else {
//           expect(tries[tries.length - 1][callable](...arg)).toStrictEqual(testCase.output[i]);
//         }
//       }
//     });
//   }
// });
