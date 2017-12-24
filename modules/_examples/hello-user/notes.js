console.log('Notes Module');
// console.log(module);

module.exports.addNote = () => {
  console.log('add Note');
  return 'new Note';
};

module.exports.add = (a, b) => {
  return a + b;
};
