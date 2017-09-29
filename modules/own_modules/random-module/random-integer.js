// this constant is not exported
const MAX = 100;

function randomInteger() {
  return Math.floor(Math.random() * MAX)
}

// module exports can be anything you want
// anything to which you can assign a variable
// can be assigned to module.exports
// but it's often an object
module.exports = randomInteger;
