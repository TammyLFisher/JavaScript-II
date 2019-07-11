// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const niCKname = "Poop Head";
const dogName = "Atlas";
function returnDog(){
  return niCKname + dogName;
}
console.log('His name is, ' + (niCKname + " " + dogName));



function pooPERs() {
  let herName = 'Fluff Butt Akira!';
  function sayHello() {
    console.log('Her name is, ' + herName);
  }
  return sayHello;
}

let testFunc = pooPERs();
testFunc();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
function counterFunc() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

let counter = counterFunc();

console.log( counter() );
console.log( counter() );
console.log( counter() );
  // Return a function that when invoked increments and returns a counter variable.
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  
  function counter2(nameOfCounter) {
    let counter = 0;
  
    function increment() {
      counter = counter + 1;
  
      return("Number of " + nameOfCounter + ": " + counter);
    };
  
    function decrement() {
      counter = counter - 1;
  
      return("Number of " + nameOfCounter + ": " + counter);
    };
  
    return {
      increment : increment,
      decrement : decrement
    };
  }
  
  let petsCounter = counter2("pets");
  
  console.log(petsCounter.increment());
  console.log(petsCounter.increment());
  console.log(petsCounter.increment());
  console.log(petsCounter.increment()); 
  console.log(petsCounter.decrement());
  console.log(petsCounter.decrement());