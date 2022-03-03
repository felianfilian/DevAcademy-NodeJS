const http = require('http');

const server = http.createServer(route);
server.listen(3000);

function route(req, res) {
    if (req.url == '/') {
        res.write('es lebt');
    }
    res.end();
}