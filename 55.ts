/*
 * 55. Jump Game
 *
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 */
function canJump(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }
  if (nums[0] === 0) {
    return false;
  }
  let furthestUnJumpedZeroIndex: number | undefined = undefined;
  for (let i = nums.length - 2; i > -1; i--) {
    // we don't care if last index is 0, since it's the goal. So we start just before the last index
    if (nums[i] === 0 && furthestUnJumpedZeroIndex === undefined) {
      furthestUnJumpedZeroIndex = i;
    } else {
      if (furthestUnJumpedZeroIndex === undefined) {
        continue;
      }
      const furthestZeroIndexDiff = furthestUnJumpedZeroIndex - i;
      if (nums[i] > furthestZeroIndexDiff) {
        furthestUnJumpedZeroIndex = undefined;
      }
    }
  }
  return furthestUnJumpedZeroIndex === undefined;
}

/*
 * My original, silly thought process...
 */
function canJump2(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }
  if (nums[0] === 0) {
    return false;
  }
  let furthestZeroIndex: number | undefined = undefined;
  let hasFoundJumpOverZero = false;
  for (let i = nums.length - 2; i > -1; i--) {
    // we don't care if last index is 0, since it's the goal. So we start just before the last index
    // if 0 or i === 0
    //   return `false` if we have a currentZeroIndex and hasFoundJumpOverZero is false
    //   set furthestZeroIndex and reset hasFoundJumpOverZero
    // if NOT 0
    //   `continue` if furthestZeroIndex === undefined OR hasFoundJumpOverZero === true
    //   see if it can jump over the furthestZeroIndex. If you can, hasFoundJumpOverZero = true
    //
    if (nums[i] === 0) {
      if (typeof furthestZeroIndex === 'number' && hasFoundJumpOverZero === false) {
        // We weren't able to jump the last 0, so we can quit now.
        return false;
      }
      furthestZeroIndex = i;
      hasFoundJumpOverZero = false;
    } else if (!(nums[i] === 0)) {
      if (furthestZeroIndex === undefined || hasFoundJumpOverZero === true) {
        continue;
      }
      if (nums[i] >= nums.length - 1 - i) {
        // Direct jump to the end!
        return true;
      }
      const furthestZeroIndexDiff = furthestZeroIndex - i;
      if (nums[i] > furthestZeroIndexDiff) {
        hasFoundJumpOverZero = true;
      }
    }
  }
  return typeof furthestZeroIndex === 'undefined' || hasFoundJumpOverZero === true;
}

/* Cases
 *
 * [2,3,1,1,4] => true
 * [3,2,1,0,4] => false
 * [4] => true
 * [0] => true
 * [0,1] => false
 * [1,1,1,1] => true
 * [1,2,10,100] => true
 * [3,0,0,0] => true (failed at first)
 */

/*
 * Must be able to jump the furthestUnJumpedZeroIndex
 */
