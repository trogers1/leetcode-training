/*
 *
 * 189. Rotate Array
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


/**
 *
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    const curr = nums.pop();
    curr && nums.unshift(curr);
  }
}
