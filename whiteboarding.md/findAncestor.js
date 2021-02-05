// ## Problem 5: Find Ancestors of a Node

// Given a binary tree, find the ancestors of the node of a particular value.

// Root will be a root node of a binary search tree and `k` is an integer value of
// a node whose ancestors you will need to find.

// Example:
// findAncestors(6, 10) => [6, 9, 12]

// ```js
//   //   6
//   //  / \
//   // 4   9
//   //   /  \
//   //  8   12
//   //      / \
//   //     10  14
// ```
//identify problem
    //input (root.val, target)
    //output (arr of parent nodes)
    //traverse with DFS
    //optional: identify time and space complexity.

// psedocode
    //Approach 1: recursion
        //result = []
        //if (curr.left === target || curr.right === target) return curr.val
        //push return val into result, call recusive function again with new target equal to curr.val
        //return result with recursive call.

    //Aproach 2: Iteration
        //result = []
        //if (root === null) return null
        //while(curr.right or left is not equal to target) keep going down.
        //if (curr.left === curr.right === target) result.push(curr.val)
        //return result

// code
