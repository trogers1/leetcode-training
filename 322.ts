/**
 You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
 */
export function coinChange(coins: number[], amount: number): number {
  // amount of 0 requires no coins
  if (amount === 0) {
    return 0;
  }
  coins.sort((a, b) => b - a);
  // If the lowest number is bigger than the amount, we can't make it at all
  if (coins[coins.length] > amount) {
    return -1;
  }
  // deduplicate sorted array
  const dedupCoins: number[] = coins.reduce((acc, curr) => {
    if (acc.length === 0 || acc[acc.length - 1] !== curr) {
      acc.push(curr);
    }
    return acc;
  }, [] as number[]);

  console.log({ dedupCoins });

  function getMinNumCoins({
    currRemainderAmount,
    currIndex,
    currCoinsUsed,
  }: {
    currRemainderAmount: number;
    currIndex: number;
    currCoinsUsed: number;
  }): { remainder: number; numCoinsUsed: number } {
    console.log({
      currRemainderAmount,
      currIndex,
      currCoinsUsed,
    });
    if (currIndex >= dedupCoins.length) {
      return {
        remainder: currRemainderAmount,
        numCoinsUsed: currCoinsUsed,
      };
    }
    if (currRemainderAmount < dedupCoins[currIndex]) {
      const smallerRemainderResult = getMinNumCoins({ currRemainderAmount, currIndex: currIndex + 1, currCoinsUsed });
      // Retry current number with a larger remainder that it should be able to divide into
      const largerRemainderResult = getMinNumCoins({
        currRemainderAmount: currRemainderAmount + dedupCoins[currIndex - 1],
        currIndex,
        currCoinsUsed: currCoinsUsed - 1,
      });
      if (smallerRemainderResult.remainder === largerRemainderResult.remainder) {
        return smallerRemainderResult.numCoinsUsed > largerRemainderResult.numCoinsUsed
          ? largerRemainderResult
          : smallerRemainderResult;
      } else {
        return smallerRemainderResult.remainder > largerRemainderResult.remainder
          ? largerRemainderResult
          : smallerRemainderResult;
      }
    }
    const divisionResult = currRemainderAmount / dedupCoins[currIndex];
    // If no remainder, then we've reach the desired amount
    if (Number.isInteger(divisionResult)) {
      console.log('INTEGER');
      console.log({
        currIndex,
        currRemainderAmount,
        currNum: dedupCoins[currIndex],
        divisionResult,
      });
      return { numCoinsUsed: currCoinsUsed + divisionResult, remainder: 0 };
    } else {
      let possibleRemainderAmount = currRemainderAmount % dedupCoins[currIndex];
      console.log(
        `${currRemainderAmount} is not divisible by ${dedupCoins[currIndex]}. Division Result: ${divisionResult}. Remainder: ${possibleRemainderAmount}`
      );
      let possibleCoinsUsed = Math.trunc(divisionResult) + currCoinsUsed;
      const coinResultWithCurrRemainder = getMinNumCoins({
        currRemainderAmount: possibleRemainderAmount,
        currIndex: currIndex + 1,
        currCoinsUsed: possibleCoinsUsed,
      });
      console.log({ coinResultWithCurrRemainder });
      // If we weren't able to use currIndex (and any combination of lower coin values),
      // then we need to continue on, skipping currIndex and not using possibleRemainderAmount.
      if (coinResultWithCurrRemainder.remainder !== 0) {
        return getMinNumCoins({
          currRemainderAmount,
          currIndex: currIndex + 1,
          currCoinsUsed,
        });
      } else {
        return coinResultWithCurrRemainder;
      }
    }
  }

  for (let i = 0; i < dedupCoins.length; i++) {
    const coinResult = getMinNumCoins({
      currRemainderAmount: amount,
      currIndex: i,
      currCoinsUsed: 0,
    });
    if (coinResult.remainder === 0) {
      return coinResult.numCoinsUsed;
    }
  }
  return -1;
}
