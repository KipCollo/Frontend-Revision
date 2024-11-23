# Express

It is based on Node js Http module and connect components.Those components are are Middlewares.Can be used to build Web Apps and web services.

Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node-based Web applications. Following are some of the core features of Express framework:

1. Allows to set up middlewares to respond to HTTP Requests.
2. Defines a routing table which is used to perform different actions based on HTTP Method and URL.
3. Allows to dynamically render HTML Pages based on passing arguments to templates.

## Installing Express

Install the Express framework globally using NPM so that it can be used to create a web application using node terminal.

```bash
npm install express --save
```

## Creating WEB SERVER

```js
const express = require ("express");
const app = express();
const port =8000;

app.listen(port,callback function)
```

- NODEMON(Node Monitor): Helps in auto-updating changes in files.Should be installed globally.

```bash
sudo npm i -g nodemon
```

Instead of staring app with node you start with nodemon.i.e

```bash
nodemon index.js
```

## ROUTING

```js
app.get("route",function(request,response){

});
```
