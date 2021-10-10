/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
intervals.sort((x,y)=>x[0]-y[0])

    const res = [intervals[0]]
    for(let i = 1;i<intervals.length;i++){
        const new_comer = intervals[i]
        if(new_comer[0]<=res[res.length-1][1]){
            res[res.length-1][1] =  Math.max(res[res.length-1][1],new_comer[1])
        }else{
            res.push(new_comer)
        }
    }
    return res
};
