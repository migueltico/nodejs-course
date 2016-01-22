var repl=require("repl");
var	context=repl.start(">>>",null,null,null,true).context;
//preload in modules
context.http=require('http');
context.util=require('util');
context.os=require('os');

//os.hostname( );---------nombre de la maquina
//util.log('mensaje');


