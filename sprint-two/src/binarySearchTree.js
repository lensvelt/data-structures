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


BinarySearchTree.prototype.contains = function() {

};

BinarySearchTree.prototype.depthFirstLog = function() {

};




    // if no children, then set as left
    // if left child only
      // if smaller than left child, set as left and set current left as right
      // otherwise, set as right child
    // if left+right children, then check:
      // check against left child
        // if smaller than left child, go to left child's children (recursive call)
        // if bigger than left child, then check against right child
      // check against right child
        // recursive call


/*
 * Complexity: What is the time complexity of the above functions?
 */


/*A .left property, a binary search tree (BST) where all values are lower than the current value.
A .right property, a BST where all values are higher than than it the current value.
A .insert() method, which accepts a value and places in the tree in the correct position.
A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.*/