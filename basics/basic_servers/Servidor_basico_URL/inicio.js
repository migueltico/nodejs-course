var servidor=require('./servidor');
var enrutador=require('./enrutador');

servidor.iniciar(enrutador.enrutar);