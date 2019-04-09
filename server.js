 /* Create and initialize the server */
 const http = require('http')

 const server = http.createServer(function(request, response) {
   console.dir(request.param)
   if (request.method == 'PUT') {
     console.log('POST')
     var body = ''
     request.on('data', function(data) {
       body += data
       console.log('Partial body: ' + body)
     })
     request.on('end', function() {
       console.log('Body: ' + body)
       response.writeHead(200, {'Content-Type': 'text/html'})
       response.end('post received')
     })
   } else {
     console.log('GET')
   }
 })
 
 const port = 3000
 server.listen(port)
 console.log(`Listening at port ${port}`)