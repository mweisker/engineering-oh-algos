// Link: https://leetcode.com/problems/lru-cache/
// Difficulty: Medium
// Time: 30 min

/**
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. 
 * (https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU)
 * 
 * Implement the LRUCache class:
 *  - LRUCache(int capacity): Initialize the LRU cache with positive size capacity.
 *  - int get(int key): Return the value of the key if the key exists, otherwise return -1.
 *  - void put(int key, int value): Update the value of the key if the key exists. 
 *    Otherwise, add the key-value pair to the cache. If the number of keys exceeds 
 *    the capacity from this operation, evict the least recently used key.
 * The functions get and put must each run in O(1) average time complexity.
 */

// Example 1:

// Input
// ["LRUCache", "put",   "put", "get", "put", "get", "put", "get", "get", "get"]
//      [[2],   [1, 1], [2, 2],  [1],  [3, 3], [2], [4, 4], [1],    [3],   [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4


/**
 * @param {number} capacity
 */
function LRUCache(capacity) {
  this.cap = capacity;
  this.length = 0;
  this.cache = {};
  this.keyStack = [];
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache[key] === undefined) return -1;
  else {
    const newStack = [];
    this.keyStack.forEach(k => {
      if (k !== key) newStack.push(k);
    });
    console.log(newStack)
    newStack.push(key);
    this.keyStack = newStack;
    return this.cache[key];
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // If put is adding a new value, not in the cache
  if (this.cache[key] === undefined) {
    this.cache[key] = value;
    this.keyStack.push(key);
    // If we still have space in our capacity
    if (this.length < this.cap) this.length++;
    // If we don't, find the key we did longest ago and delete from the cache
    else {
      const oldest = this.keyStack.shift();
      delete this.cache[oldest];
    }
  } else {
    // If we are simply updating an old key value
    this.cache[key] = value;
    const newStack = [];
    this.keyStack.forEach(k => {
      if (k !== key) newStack.push(k);
    });
    newStack.push(key);
    this.keyStack = newStack;
    

  }
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const obj = new LRUCache(2);
obj.put(1, 1);
console.log(obj);
obj.put(2, 2);
console.log(obj);
obj.put(3, 3);
console.log(obj)
obj.put(2, 'banana')
console.log(obj);
obj.put(4, 4)
console.log(obj);
obj.put(5, 5)
console.log(obj);