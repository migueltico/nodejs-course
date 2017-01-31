var repl=require("repl"),
	net=require("net");
//iniciar REPL con un pompt distinto y con el parametro ignoreUndefined configurado a true
repl.start("nodepersonalizado>",null,null,null,true);

net.createServer(function(socket){
	repl.start("node via TCP socket>",socket);
}).listen(8124);