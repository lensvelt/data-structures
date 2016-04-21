var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var found = false;

  if (this.value === target) {
    found = true;
    return found;
  }
  if (this.children.length === 0) {
    return false;
  } else {
 
    _.each(this.children, function(child) {
      found = found || child.contains(target);
      return found;
    });
  }
  return found;
};



/*
Complexity: What is the time complexity of the above functions?
linear
*/