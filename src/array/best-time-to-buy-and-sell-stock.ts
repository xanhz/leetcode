/**
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 */
function maxProfit(prices: number[]): number {
  let buyIndex = 0;
  let sellIndex = 1;
  let profit = 0;
  while (sellIndex < prices.length) {
    if (prices[buyIndex] < prices[sellIndex]) {
      profit = Math.max(profit, prices[sellIndex] - prices[buyIndex]);
    } else {
      buyIndex = sellIndex;
    }
    ++sellIndex;
  }
  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
