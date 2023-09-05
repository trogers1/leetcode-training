//  Remove Duplicates from Sorted Array II

function removeDuplicates(nums: number[]): number {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const curr = nums.shift() as number;
    if (i === 0 || i === 1) {
      nums.push(curr);
      continue;
    }
    const prev2Avg = (nums[nums.length - 1] + nums[nums.length - 2]) / 2;
    if (prev2Avg < curr) {
      nums.push(curr);
    }
  }
  return nums.length;
}

/*
 * Test Cases:
 * [1,1,1,2,2,3] => [1,1,2,2,3,_]
 * [0,0,1,1,1,1,2,3,3] => [0,0,1,1,2,3,3,_,_]
 * [0,0,0,0,0,0,0,0,0,0] => [0,_,_,_,_,_,_,_,_,_]
 * [1] => [1]
 */
