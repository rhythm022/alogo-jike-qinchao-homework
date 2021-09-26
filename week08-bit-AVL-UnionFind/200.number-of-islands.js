/**
 * @param {character[][]} grid
 * @return {number}
 */
 class UnionFind{
    constructor(size){
        this.size = size
        this.parent = new Array(size).fill().map((_,i)=>i)
    }
    group(p){
        const {parent} = this
        let cur = p
        while(parent[cur] !== cur){
            cur = parent[cur]
        }
        let cur2 = p
        while(parent[cur2] !== cur2){
            const tmp = parent[cur2]
            parent[cur2] = cur
            cur2 = tmp

        }
        return cur
    }
    union(p1,p2){
        const p1_r = this.group(p1)
        const p2_r = this.group(p2)

        if(p1_r !== p2_r){
            this.parent[p1_r] = p2_r
            --this.size
        }
    }
}

var numIslands = function(grid) {

const ny = grid.length
const nx = grid[0].length
const uf = new UnionFind(ny * nx)
let space = 0

for(let y =0;y<ny;y++){
    for(let x =0;x<nx;x++){
        if(grid[y][x] === '1'){
            grid[y][x] = '0'
            for(let [yOff,xOff] of [[0,1],[0,-1],[1,0],[-1,0]]){
                const new_y = y + yOff
                const new_x = x + xOff
                
                if(new_y>=0 && new_y<ny && new_x>=0 && new_x<nx && grid[new_y][new_x] === '1'){
                    uf.union(y*nx+x,new_y*nx+new_x)
                }
            }
        }else{
            ++space
        }
    }
}
return uf.size - space
};