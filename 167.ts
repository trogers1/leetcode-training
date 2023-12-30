export function twoSum(numbers: number[], target: number): number[] {
  let char1Pos = 0,
    char2Pos = numbers.length - 1;
  for (let i = 0; i < numbers.length; i++) {
    const currNum = numbers[char1Pos] + numbers[char2Pos];
    if (currNum === target) {
      char1Pos++;
      char2Pos++;
      return [char1Pos, char2Pos];
    } else if (currNum > target) {
      char2Pos--;
    } else {
      char1Pos++;
    }
  }
  throw Error('Should not get here!');
}
