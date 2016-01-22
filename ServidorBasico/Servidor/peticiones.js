function inicio() {
	console.log("Has entrado en la pagina de inicio");
	return "inicio";
}

function pagina1 () {
	console.log("Has entrado en la pagina1");
	return "pagina1";
}

function pagina2() {
	console.log("Has entrado en la pagina2");
	return "pagina2";
}

function favicon() {
	console.log("se ha pedido el favicon");
	return "";
}
exports.inicio=inicio;
exports.pagina1=pagina1;
exports.pagina2=pagina2;
exports.favicon=favicon;