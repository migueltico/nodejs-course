Number.prototype.integer=function() {
	
	return Math[this < 0 ? "ceil":"floor"](this);
}

console.log(7.3.integer());
console.log(-7.3.integer());

//obj.hasOwnProperty("prop") //determina si una propiedad es propia o heredada
console.log(Number.hasOwnProperty("integer"));//false
console.log(Number.hasOwnProperty("Double"));//true

//PSEUDO-CLASE-- TIPADO DE PATO 
function Contador (inicial) {
	this.cont=inicial;
}
//
Contador.prototype={
	contador:function() {
		return this.cont;
	},
	incr:function() {
		return ++this.cont;
	}
}

var cont_1=new Contador(0);
var cont_2=new Contador(7);

console.log(cont_1.contador());
console.log(cont_1.incr());

console.log(cont_2.contador());
console.log(cont_2.incr());


console.log({} instanceof Object)
console.log({} instanceof Array)