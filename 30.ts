/**
 * 30. Substring with Concatenation of All words
 *
 * You are given a string s and an array of strings words. All the strings of words are of the same length.
 *
 * A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.
 *
 * For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
 *
 * Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.
 */
export function findSubstring(s: string, words: string[]): number[] {
  const fullSubstrLength = words.reduce((acc, curr) => acc + curr.length, 0);
  const foundSubstrIndices = [];
  // console.log({ s, words, fullSubstrLength });
  if (s.length < fullSubstrLength) {
    return [];
  }
  // console.log(
  // `iterating from 0 -> ${s.length - fullSubstrLength}/${s.length} (-${fullSubstrLength}; ${words.join('|')})`
  // );
  for (let i = 0; i <= s.length - fullSubstrLength; i++) {
    // console.log({ i });
    const substr = s.substring(i, i + words[0].length);
    const foundWordIndex = words.indexOf(substr);
    if (foundWordIndex !== -1) {
      const possibleRemainingPermutationStr = s.slice(i + words[0].length, i + fullSubstrLength);
      const remainingWordsInPermutation = [...words];
      remainingWordsInPermutation.splice(foundWordIndex, 1);
      // console.log({ substr, foundWordIndex, possibleRemainingPermutationStr, remainingWordsInPermutation });
      if (checkForPermutationSubstr(possibleRemainingPermutationStr, remainingWordsInPermutation)) {
        // console.log(`Pushing index: ${i}`);
        foundSubstrIndices.push(i);
        // console.log({ i });
        // i += words[0].length - 1;
        // console.log({ i });
      }
    }
  }
  return foundSubstrIndices;
}

export function checkForPermutationSubstr(s: string, words: string[]): boolean {
  // console.log({ checkForPermutationSubstr: true, s, words });
  for (let word of words) {
    let matchedIndex = undefined;
    // console.log({ word, matchedIndex });
    for (let i = 0; i < s.length; i += word.length) {
      const currStr = s.slice(i);
      // console.log({ currStr });
      if (currStr.startsWith(word)) {
        matchedIndex = i;
        break;
      }
    }
    if (matchedIndex === undefined) {
      return false;
    }
    // console.log({ word, s });
    s = s.slice(0, matchedIndex) + s.slice(matchedIndex + word.length);
    // console.log({ word, s });
  }
  // console.log({ checkForPermutationSubstr__result: s.length === 0, s, words });
  return s.length === 0;
}
