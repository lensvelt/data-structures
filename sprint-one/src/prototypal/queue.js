var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.length = 0;
  instance.total = 0;
  instance.next = 0;
  return instance;
};

var queueMethods = {};



/*var Queue = function() {
  var instance = {};
  instance.storage = {};
  instance.length = 0;
  instance.total = 0;
  instance.next = 0;
  _.extend(instance, queueMethods);
  return instance;
};
*/

queueMethods.enqueue = function(value) {
  this.storage[this.total] = value;
  this.length++;
  this.total++;
};

queueMethods.dequeue = function() {
  var popped = this.storage[this.next];
  delete this.storage[this.next];
  this.length--;
  this.next++;
  return popped;
};

queueMethods.size = function() {
  return Math.max(this.length, 0);
};