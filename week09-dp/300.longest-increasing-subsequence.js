/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const piles = []
    for(let i =0;i<nums.length;i++){
        let new_card = nums[i]
        let le = 0 
        let ri = piles.length - 1
        let brok
        while(le <= ri){
            brok = (le + ri)>>1
            if(piles[brok] === new_card){
                le = brok
                break
            }
            if(new_card >piles[brok]){
                le = brok + 1
            }else{
                ri = brok - 1

            }
            
        }
        // 最后有四种可能：le
        // ri => le
        // 小于le => le
        // 大于ri => ri+1
        // 新卡能够找到：比他小的右侧第一个位置
        piles[le] = new_card
    }

    return piles.length

};
