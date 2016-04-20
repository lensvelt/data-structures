var Queue = function() {
  var instance = {};
  instance.storage = {};
  instance.length = 0;
  instance.total = 0;
  instance.next = 0;
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

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