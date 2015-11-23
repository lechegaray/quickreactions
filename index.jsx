var http = require('http')
  , React = require('react')
  , HelloWorld = require('./Components/HelloWorld')
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(
    React.renderToString(
      <html>
        <head>
          <title>Hello World</title>
        </head>
        <body>
          <HelloWorld />
          <div>
            Rendered from the Server!
          </div>
        </body>
      </html>
    )
  )
}).listen(1337)
console.log('Server running at http://localhost:1337/')