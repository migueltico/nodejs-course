var http=require('http');
var url=require('url');
var fs=require('fs');

var servidor=require('./modulos/servidor');
servidor.crear(http,url,fs);
console.log('server listening on port 3000');