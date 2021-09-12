var countSubstrings = function(s) {
    count = 0;
    function traverse(start, end) {
        while (start >= 0 && end < s.length && s[start] == s[end]) { 
            count++;
            start--; 
            end++;
        }
    }
    
    for (let i = 0; i < s.length; i++) { 
        traverse(i, i);                        
        traverse(i, i + 1);               
    }
	
    return count;
};