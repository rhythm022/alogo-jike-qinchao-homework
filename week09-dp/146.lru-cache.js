/**
 * @param {number} capacity
 */

 class DLinkedNode{
     constructor(key = 0,value = 0){
         this.key = key
         this.value = value
         this.l = null
         this.r = null
     }
 }
var LRUCache = function(capacity) {
    this.hash = {}
    this.head = new DLinkedNode()
    this.tail = new DLinkedNode()
    this.head.r = this.tail//head->tail
    this.tail.l = this.head//head<-tail
    this.capacity = capacity
    this.size = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const { hash } = this
    if(!(key in hash))return -1
    const existed = hash[key]
    this.moveToHead(existed)

    return existed.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
         const { hash } = this

        if(!(key in hash)){
            const new_node = new DLinkedNode(key,value)
            hash[key] = new_node//这个节点hash表里有一份
            this.addToHead(new_node)//这个节点链表里也有一份
            this.size +=1
            if(this.size>this.capacity){
                const removed = this.removeTail()
                delete hash[removed.key]
                this.size -=1
            }

        }else{
            const existed = hash[key]
            this.moveToHead(existed)

            existed.value = value
        }
};
LRUCache.prototype.addToHead = function(node) {
    const {head,tail} = this
    node.l = head
    node.r = head.r
    head.r.l = node
    head.r = node
}
LRUCache.prototype.removeNode = function(node) {
    const {head,tail} = this
    node.l.r = node.r
    node.r.l = node.l
}
LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node)
    this.addToHead(node)
}
LRUCache.prototype.removeTail = function() {
     const {tail} = this
     const removed = tail.l
     this.removeNode(removed)
     return removed

}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
