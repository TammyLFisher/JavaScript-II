// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum','yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


 

function getLength(arr, cb) {
  return cb();
}
console.log(getLength(items, function () {
  return items.length;
}) );
 
  // getLength passes the length of the array into the callback.


function last(arr, cb) {
  return cb();
}
console.log(last(items, function () {
  return items.slice(-1)[0] ;
}) );
  // last passes the last item of the array into the callback.

  function collectNumbers(x, y, cb){
    return cb(x,y);
  }

  console.log(collectNumbers(5,6,function(x,y){return x + y}))
  function addNumbers(x,y){
    return x+y;
  }
 // collectNumbers(5,6, addNumbers(5,6));

function calculator(x,y){
  return {
    add: function() {
      return x + y;
    },
    subtract: function() {
      return x - y;
    },
    multiply: function() {
      return x * y;
    },
    divide: function() {
      return x / y;
    }
  }
};

console.log(calculator(7,3).multiply())

   
  // sumNums adds two numbers (x, y) and passes the result to the callback.

function multiplyNumbers(x,y){
  return x*y;
};
console.log(collectNumbers(5,6,multiplyNumbers));

  // multiplyNums multiplies two numbers and passes the result to the callback.


function contains(item, list, cb){
 cb(list.includes(item));
 }
console.log(items.includes('yo-yo'));


  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.


/* STRETCH PROBLEM */

function removeDuplicates(items, alert) {

  let unique = {};
    items.forEach(function(i) {
      items=>alert(items)
    if(!unique[i]) {
      unique[i] = true;
    }
     });
  return Object.keys(unique);
}
console.log(removeDuplicates(items));
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
