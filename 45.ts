/* 45. Jump Game II
 *
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

    0 <= j <= nums[i] and
    i + j < n

Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
*/
export function jump(nums: number[]): number {
  // console.log({nums})
  if (nums.length === 1) {
    return 0;
  }
  let finalTargetIndex = nums.length - 1;
  let jumpCount = 0;
  // console.log({init: true, finalTargetIndex, jumpCount});
  while (finalTargetIndex > 0) {
    // console.log({ while: true, finalTargetIndex, jumpCount });
    let foundJumper = false;
    for (let i = 0; i < finalTargetIndex; i++) {
      // console.log({ if: undefined, finalTargetIndex, jumpCount, i, 'i+nums[i]': i + nums[i], foundJumper });
      if (i + nums[i] >= finalTargetIndex) {
        jumpCount++;
        finalTargetIndex = i;
        foundJumper = true;
        // console.log({if: true, finalTargetIndex, jumpCount, i, 'i+nums[i]': i+nums[i], foundJumper})
        break;
      }
    }
    // console.log({afterFor: true, foundJumper, jumpCount, finalTargetIndex})
    if (!foundJumper) {
      throw new Error(`Couldn't find a jump to finalTargetIndex ${finalTargetIndex} (${nums[finalTargetIndex]})`);
    }
  }
  return jumpCount;
}

// Find the first nums[i] that can jump to the end, that's our new end.
// Find the next and next until we hit the beginning of the array
