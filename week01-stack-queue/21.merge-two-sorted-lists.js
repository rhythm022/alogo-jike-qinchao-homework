/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if(!l1)return l2
    if(!l2)return l1

    if(l1.val>l2.val){
        l2.next = mergeTwoLists(l2.next,l1)
        return l2
    }else{
         l1.next = mergeTwoLists(l1.next,l2)
        return l1
    }
};