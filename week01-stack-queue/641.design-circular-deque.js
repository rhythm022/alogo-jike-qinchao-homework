/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
    this.deq = new Array(this.cap = k)
    this.head= 0
    this.tail= 0
    this.size = 0
};
MyCircularDeque.prototype.nxt = function(id){
    return (id+1)%this.cap
}
MyCircularDeque.prototype.pre = function(id){
    return (id-1+this.cap)%this.cap
}
/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.isFull())return false
    
    this.head = this.pre(this.head)
    this.deq[this.head] = value
    this.size++
    return true
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.isFull())return false
    this.deq[this.tail] = value
    this.tail = this.nxt(this.tail)
    this.size++
    return true
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.isEmpty())return false
    this.head = this.nxt(this.head)
    this.size--
    return true

};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.isEmpty())return false
    this.tail = this.pre(this.tail)
    this.size--
    return true
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.isEmpty())return -1
    return this.deq[this.head]
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.isEmpty())return -1

    return this.deq[this.pre(this.tail)]
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.size === 0
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.size === this.cap
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */