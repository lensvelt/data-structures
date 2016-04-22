/*var BinarySearchTree = function(value) {
  // var new root = original root.left
  // 
};

BinarySearchTree.prototype.left = function() {

};

BinarySearchTree.prototype.right = function() {

};

BinarySearchTree.prototype.insert = function(value) {
  var currentTree = this.root;
  // var newBST = new BinarySearchTree(value)
  // originalBST.left = newBST
};*/

var BinarySearchTree = function(value) {
  this.parent = null;
  this.value = value; 
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value, current) {
  var currentTree = current ? current : this;
  var newTree = new BinarySearchTree(value);

  // if there are no children trees
  if (!currentTree.left && !currentTree.right) {
    if (value < currentTree.value) {
      currentTree.left = newTree;
      newTree.parent = currentTree;
      return;
    } else {
      currentTree.right = newTree;
      newTree.parent = currentTree;
      return;
    }
  } else {
    while (currentTree.left || currentTree.right) {
      if (value < currentTree.value) {
        if (currentTree.left) {
          currentTree = currentTree.left;
          return this.insert(value, currentTree);
        } else {
          currentTree.left = newTree;
          newTree.parent = currentTree;
          return;
        }
      } else {
        if (currentTree.right) {
          currentTree = currentTree.right;
          return this.insert(value, currentTree);
        } else {
          currentTree.right = newTree;
          newTree.parent = currentTree;
          return;
        }
      }
    }
  }
};


BinarySearchTree.prototype.contains = function(value, current) {
  var currentTree = current ? current : this;
  var found = false;

  if (currentTree.value === value) {
    found = true;
    return found;
  }
  if (!currentTree.left && !currentTree.right) {
    return found;
  } else {
    if (value < currentTree.value) {
      return found = found || this.contains(value, currentTree.left);
    } else {
      return found = found || this.contains(value, currentTree.right);
    }
  }

  return found;
};

BinarySearchTree.prototype.depthFirstLog = function(callback, current) {
  var currentTree = current ? current : this;

  callback(currentTree.value);
  if (!currentTree.left && !currentTree.right) {
    return;
  } else {
    if (currentTree.left) {
      this.depthFirstLog(callback, currentTree.left);
    }
    if (currentTree.right) {
      this.depthFirstLog(callback, currentTree.right);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
