function route (handle,pathname,response,postData) {
  console.log("A punto de Rutear algo para "+pathname);
  if (typeof handle[pathname]==='function') {
     handle[pathname](response,postData);
  }else{
    console.log("No se Encontro manipulador para "+pathname);
    response.writeHead(404,{"Content-Type":"text/html"});
    response.write("404 Not Found");
    response.end();
  }
}
exports.route=route;