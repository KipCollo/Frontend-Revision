# NODE

It's a runtime for executing js code.Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.

Node.js = Runtime Environment + JavaScript Library

## Features of Node.js

1. Asynchronous and Event Driven − All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for
an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from
the previous API call.
2. Single Threaded but Highly Scalable − Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking
way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program
and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.
3. No Buffering − Node.js applications never buffer any data. These applications simply output the data in chunks.
