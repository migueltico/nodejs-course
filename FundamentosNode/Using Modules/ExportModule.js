//class
function MyClass (myConstructorParam1,myConstructorParam2) {
  //always initiazlize all instance properties
  this.PropertyOne=myConstructorParam1;
  this.PropertyTwo=myConstructorParam2;
}

//class methods
MyClass.prototype.PrintParams=function() {
  console.log("PropertyOne"+this.PropertyOne);
  console.log("PropertyTwo"+this.PropertyTwo);
};
module.exports=MyClass;