// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.allNodes = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.allNodes[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Array.isArray(this.allNodes[node]);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.allNodes[node] = null;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.allNodes[fromNode].indexOf(toNode) !== -1;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.allNodes[fromNode].push(toNode);
  this.allNodes[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.allNodes[fromNode].splice(this.allNodes[fromNode].indexOf(toNode), 1);
  this.allNodes[toNode].splice(this.allNodes[toNode].indexOf(fromNode), 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.allNodes, function(arrayOfEdges, index) {
    cb(index);
  });
};

/*var Node = function(value) {
  this.value = value;
  this.edges = [];
};
*/
/*
 * Complexity: What is the time complexity of the above functions?
 */

    // var connectToFive = function(item) {
    //   graph.addEdge(item, 5);
    // };
    // graph.addNode(5);
    // graph.addNode(2);
    // graph.addNode(1);
    // graph.addNode(3);
    // graph.forEachNode(connectToFive);
    // expect(graph.hasEdge(2, 5)).to.equal(true);
    // expect(graph.hasEdge(1, 5)).to.equal(true);
    // expect(graph.hasEdge(3, 5)).to.equal(true);
    // expect(graph.hasEdge(5, 5)).to.equal(true);