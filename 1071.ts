// Greatest Common Divisor of Strings: https://leetcode.com/problems/greatest-common-divisor-of-strings/

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return '';
  }
  // Basically, because we now know that the strings are both composed of repeating characters (because their order doesn't matter)
  // we can now just find the greatest common devisor of the length of the strings and know the repeating set is (0, greatest-common-divisor-of-strings)

  // Using Euclidean's Algorithm (https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclidean_algorithm)
  function getGreatestCommenDivisor(a: number, b: number) {
    if (!b) {
      return a;
    }
    const remainder = a % b;
    if (remainder) {
      return getGreatestCommenDivisor(b, remainder);
    }
  }

  return str1.substring(0, getGreatestCommenDivisor(str1.length, str2.length));
}
