var arquitectura = process.arch;
var sistemaOperativo = process.platform;
var caracteristicas = process.features;
var id_de_proceso = process.pid;
var currentWorkingDirectory = process.cwd();
var changeDirectory = process.chdir('/');
var InitialPath = process.execPath;

// Versiones de Node
var Nodeversion = process.version;
var LibrariesVersions = process.versions;

// sistemas Unix


console.log("arquitectura: ", arquitectura );
console.log("sistemaOperativo: ", sistemaOperativo );
console.log("caracteristicas: ", caracteristicas );
console.log("ID PROCESO: ", id_de_proceso );
console.log("Directorio de Trabajo: ", currentWorkingDirectory);
console.log("Cambiar Directorio ", changeDirectory);
console.log("path initial: ", InitialPath);
console.log("version de Node: ",Nodeversion);
console.log("versiones de proceso: ",LibrariesVersions);

//identificadores de Grupo y Usuarios
console.log(process.getuid());
// console.log(process.setuid());
console.log(process.getgid());
// console.log(process.setgid());

//estadistica de ejecucion
console.log(process.uptime());
console.log(process.memoryUsage());
