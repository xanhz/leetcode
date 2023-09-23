#include <iostream>
#include <queue>
#include <vector>
#include <functional>

class Solution {
public:
    int lastStoneWeight(std::vector<int>& stones) {
        std::priority_queue<int> pq(stones.begin(), stones.end());
        while (pq.size() > 1) {
            int first = pq.top();
            pq.pop();
            int second = pq.top();
            pq.pop();
            if (first != second) {
                pq.push(first - second);
            }
        }
        return pq.empty() ? 0 : pq.top();
    }
};
