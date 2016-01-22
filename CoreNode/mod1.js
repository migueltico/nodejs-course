//no se puede acceder a esta variable desde otro modulo
var valorGlobal;
exports.setGlobal=function(val) {
  valorGlobal=val;
}

exports.returnGlobal=function() {
  console.log(global);
  return valorGlobal;
}