# Node.js Course

## Requirements
- Javascript


## Course
- enviroment
- hello-world.js
- modules/

- asyncrhonous-nature/
  - asyncrhonous-nature.js
  - reading-file/
- web-servers/

## Commands
- to run app in the background: `node app.js &`
- to find the process: `ps -ef | grep node`
- then kill process: `kill <processNumber>`

You can set any number of environment variables rigth from the command line before you
    run your server by executing something like the following command:
    $ PORT=5500 node server.js

## More Info
- [API Docs Node](https://nodejs.org/api/)

Leyendo la documentacion:
https://hackernoon.com/19-things-i-learnt-reading-the-nodejs-docs-8a2dcc7f307f#.t0tpaaale

debugeo en chrome:
https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27#.cooco9gmc

npm install -g node-inspector

usage
node --debug <myapp>.js //normal debug
node --debug-brk <myapp>.js //first line
