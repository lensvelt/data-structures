var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var total = 0;
  var length = 0;
  var lastPopped = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[total] = value;
    total++;
    length++;
  };

  someInstance.dequeue = function() {
    var popped = storage[lastPopped];
    delete storage[lastPopped];
    lastPopped++;
    length--;
    return popped;
  };

  someInstance.size = function() {
    return Math.max(length, 0);
  };

  return someInstance;
};
