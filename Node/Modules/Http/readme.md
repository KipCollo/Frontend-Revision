# Http module

Used when creating network applications i.e creating server eg web server

//loading the module
 const http = require('http');

//CREATE A SERVER
//We use http instance created and call createServer() method.
 http.createServer()

 //We then bind it to port using listen() method
 const server =  http.createServer()
 server.listen(3000)

 //Shorthand way:
 http.createServer().listen(3000)

 //ROUTING
 if(requestAnimationFrame.url==='/some/path'){
    //response
 }
