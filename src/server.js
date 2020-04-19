const server = require('express')();
const numberUtils = require("./number-utils");
const child = require('child_process');

server.get('/:number', (req, res) => {
    const childProcess = child.fork('src/number-utils.js');
    childProcess.send({"number": parseInt(req.params.number)});
    childProcess.on("message", message => res.send(message));
});

server.listen(8080, () => console.log('listening'));
