/*
 *
 * 189. Rotate Array
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 */

/**
 *
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // May as well just short-circuit this if I can
  if (nums.length < 2) {
    return;
  }
  k = k % nums.length;
  for (let i = 0; i < k; i++) {
    const curr = nums.pop();
    typeof curr === 'number' && nums.unshift(curr);
  }
}

/**
 *
 Do not return anything, modify nums in-place instead.

 NOTE: This doesn't work yet
 */
function rotate2(nums: number[], k: number): void {
  const actualRotations = k % nums.length;
  const tempNums = [...nums];
  nums = [...tempNums.slice(actualRotations, nums.length), ...tempNums.slice(0, actualRotations)];
}
