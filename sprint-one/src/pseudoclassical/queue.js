var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.total = 0;
  this.next = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.total] = value;
  this.length++;
  this.total++;
};

Queue.prototype.dequeue = function() {
  var popped = this.storage[this.next];
  delete this.storage[this.next];
  this.length--;
  this.next++;
  return popped;
};

Queue.prototype.size = function() {
  return Math.max(this.length, 0);
};
