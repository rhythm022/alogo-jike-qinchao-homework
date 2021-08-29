/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let res = 0
    for(let [index,value] of prices.entries()){
        if(value< prices[index+1]){
            res += prices[index+1] - value
        }
    }
    return res
};