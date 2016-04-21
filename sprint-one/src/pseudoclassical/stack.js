var Stack = function() {
  this.storage = {};
  this.length = 0;
};

Stack.prototype.size = function() {
  return Math.max(0, this.length);
};

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  var popped = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return popped;
};
