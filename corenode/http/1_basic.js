require('http')
  .createServer()
  .listen({
    port: 3000,
    host: 'localhost'
  })
  .on('request',(req, res) => {
    res.end('hello!');
  });
