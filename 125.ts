export function isPalindrome(s: string): boolean {
  let char1Pos = 0,
    char2Pos = s.length - 1;
  const ignoreRegex = /[\W_]/;
  for (let i = 0; i <= Math.ceil(s.length / 2); i++) {
    // console.log({s, 1: s[char1Pos], 2: s[char2Pos], char1Pos, char2Pos})
    while (ignoreRegex.test(s[char1Pos])) {
      char1Pos++;
      // console.log('char1Pos++', char1Pos)
    }
    while (ignoreRegex.test(s[char2Pos])) {
      char2Pos--;
      // console.log('char2Pos++', char2Pos);
    }

    // console.log({'afterwhile': true, 1: s[char1Pos], 2: s[char2Pos], char1Pos, char2Pos})
    if ((s[char2Pos] && s[char2Pos].toLowerCase()) !== (s[char1Pos] && s[char1Pos].toLowerCase())) {
      // console.log('unequal')
      return false;
    }

    char1Pos++;
    char2Pos--;
    if (char1Pos >= char2Pos) {
      // console.log('greater')
      break;
    }

    // console.log('end', char1Pos, char2Pos)
  }
  return true;
}
