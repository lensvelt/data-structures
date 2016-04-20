var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.pop = function() {
    var popped = storage[length - 1];
    delete storage[length];
    length--;
    return popped;
  };

  someInstance.size = function() {
    return Math.max(length, 0);
  };

  return someInstance;
};
