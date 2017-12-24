console.log('Starting App');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const user = os.userInfo();
const notes = require('./notes')
const sum = notes.add(3,2);


console.log(sum);
fs.appendFile('greetings.txt', `Hello ${user.username}!`, (err) => {
  if (err) {
    console.log(err);
  }
});
