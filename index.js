var http = require('http')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<title>Hello World</title>index.js on the server')
}).listen(1337)
console.log('Server running at http://localhost:1337/')