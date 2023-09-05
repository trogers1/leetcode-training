function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  const result: boolean[] = [];
  for (const numCandies of candies) {
    result.push(numCandies + extraCandies >= max ? true : false);
  }
  return result;
}

function kidsWithCandies2(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  return candies.map((numCandies) => numCandies + extraCandies >= max);
}

/* Test Cases
 * [0,1], 2 => [true, true]
 * [1], 1 => [true]
 * [0], 1 => [true]
 * [500,600], 100 => [true, true]
 * [600, 500], 100 => [true, true]
 * [600, 501], 100 => [true, true]
 */
