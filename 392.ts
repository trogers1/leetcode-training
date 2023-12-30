/*
  *
392. Is Subsequence
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

function isSubsequence(s: string, t: string): boolean {
  let regexStr = '';
  for (let i = 0; i < s.length; i++) {
    regexStr += s[i] + '.*';
  }
  return RegExp(regexStr).test(t);
}

export default isSubsequence;
