/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
 var robotSim = function(commands, obstacles) {
    const _obstacles = new Set()
    obstacles.forEach(xy=>{
        _obstacles.add(`${xy[0]}-${xy[1]}`)
    })
    const d = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0]
    ]
    let x = 0
    let y = 0
    let di = 0
    let res = 0

    for(let cmd of commands){
        if(cmd === -2){
            di = (4+di-1)%4
        }else if(cmd === -1){
            di = (4+di+1)%4
        }else{
            for(let i = 0;i<cmd;i++){
                if(_obstacles.has(`${x+d[di][0]}-${y+d[di][1]}`)) break
                x += d[di][0] 
                y += d[di][1] 
                res =Math.max(res,x**2+y**2)
            }
        }
    }

    return res
};