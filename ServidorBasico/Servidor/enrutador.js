function enrutar(manejador,ruta) {
  
	console.log("Voy a rutear algo para "+ruta);
//ESTRUCTURA DE CONTROL PARA EVITAR EL FAVICON.ICO
	if (typeof manejador[ruta]==='function') {
		return manejador[ruta]();
	}else{
		console.log('no existe una función para esa ruta'+ruta);
	}
}

exports.enrutar=enrutar;