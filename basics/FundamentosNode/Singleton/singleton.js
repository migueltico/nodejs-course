var Singleton=(function() {
  var private_variable="value";

  function private_function () {
    console.log("private");
  }

  function public_function () {
    console.log("public");
  }
  return{
    public_function:public_function
  };

})();
module.exports=Singleton;
