var sys = require('sys');

//ejemplo simple de timeout - espera dos segundos antes de continuar al siguiente paso
var star_time = new Date();
sys.puts("Iniciaa un timer en 2 segundos");

setTimeout(function() {
  var end_time = new Date();
  var difference = end_time.getTime() - star_time.getTime();
  sys.puts('Deteer el timer despues de ' + Math.round(difference/1000)+" segundos");
  clearTimeout_ejemplo();
},2000);

//ejemplo de clear time-out configurado en 30 secs, pero se cancela de inmediatoo a traves de cleartTmeOut, sin salida
function clearTimeout_ejemplo(){
  var star_time=new Date();
  sys.puts("\nSe Inicia timer de 30 segundos y lo detiene inmediatamente sin disparar una llamada");
  var timeout =setTimeout(function() {
  var end_time=new Date();
  var difference=end_time.getTime() - star_time.getTime();
  sys.puts('Timer Definido despues de ' + Math.round(difference/1000)+" segundos");
},30000);
  clearTimeout(timeout);
  interval_ejemplo();
}
//ejemplo de intervalo - cinco salidas cada 2 segundos usando setInterval
function interval_ejemplo () {
  var star_time = new Date();
  sys.puts("\nSe inicia un intervalo de 2 segundos, detenido despues del quinto tick");
  var count =1;
  var interval = setInterval(function () {
    if (count==5) clearInterval(this);
    var end_time=new Date();
    var difference=end_time.getTime()-star_time.getTime();
    sys.puts("Tick Número. "+count+" despues de "+Math.round(difference/1000))+" segundos";
    count++;
  },2000);
}
