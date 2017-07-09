console.log('One');
console.log('Two');
setTimeout(function () {
  console.log('Three');
});
console.log('Four');
console.log('Five');

/*
  * in a typical synchroonous programming
  * language
    one
    Two
      ...(2 second delay) ...
    three
    Four
    five

  * but in asynchronous aproach
    One
    Two
    Four
    Five
    ... (approx. 2 second delay) ...
    Three
*/

// the function that logs Three is know
// as a callback to setTimeout function
