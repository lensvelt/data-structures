var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.length = 0;
  return instance;
};

// Stack.prototype.size = function() {
//   return Math.max(0, this.length);
// };

// Stack.prototype.push = function(value) {
//   this.storage[this.length] = value;
//   this.length++;
// };

// Stack.prototype.pop = function() {
//   var popped = this.storage[this.length - 1];
//   delete this.storage[this.length - 1];
//   this.length--;
//   return popped;
// };


var stackMethods = {};

stackMethods.size = function() {
  return Math.max(0, this.length);
};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function() {
  var popped = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return popped;
};

var test = Stack();

console.log(test.prototype);