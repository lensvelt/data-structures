var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var current = new Node(value);
    if (!(list.head || list.tail)) {
      list.head = current;
      list.tail = current;
    } else {
      var temp = list.tail;
      temp.next = current;
      list.tail = current;
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;

    if (list.head === list.tail) {
      list.head = null;
      list.tail = null;
    } else {
      list.head = list.head.next;
    }

    return temp;
  };

  list.contains = function(target) {
    var current = list.head;

    while ( current ) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
