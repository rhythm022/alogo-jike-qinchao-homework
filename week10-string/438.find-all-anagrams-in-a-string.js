/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(str, p) {
    const res = []

    const current = {}
    const TARGET = {}

    let ticket = 0
    let full_ticket = 0
    for(let ch of p){
        if(!TARGET[ch]){
            TARGET[ch] = current[ch] = 0
            full_ticket++
        }

        TARGET[ch]++
    }
 
    for(let ri = 0;ri<str.length;ri++){
        const le_ch = str[ri - p.length];const ri_ch = str[ri]
        if(le_ch in TARGET){
            if(current[le_ch] === TARGET[le_ch])ticket--

            current[le_ch]--
        }

        if(ri_ch in TARGET){
            current[ri_ch]++
            
            if(current[ri_ch] === TARGET[ri_ch])ticket++

        }
  

        if(ticket === full_ticket)res.push(ri - p.length + 1)
    }

    return res
};