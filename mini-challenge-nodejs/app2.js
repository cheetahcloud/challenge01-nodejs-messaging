#!/usr/bin/env node
var amqp = require('amqplib/callback_api');
var http = require('http');



function rabbitMQ(response)
{
console.log("App Server started!");
var message= [];
amqp.connect('amqp://localhost', function(err, conn) {
	conn.createChannel(function(err, ch) {
		var q = 'cheetah';

		ch.assertQueue(q, {durable: true});
		console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
		ch.consume(q, function(msg) {
			console.log(" [x] Received %s", msg.content.toString());
			message.push(msg.content.toString());
			writeMessage(response, message);
			//writeMessage(response, msg.content.toString());
		    }, {noAck: true});
			 
	    });
    });
}

var server = http.createServer(function (request, response)
{
	rabbitMQ(response);
    response.writeHead(200, { "Content-Type": "text/plain" });
   // response.end("Hello World, this is my server & app!");
});

function writeMessage(response, message) {
	classement = 0;
    for (i in message) {

        classement++;
		console.log(classement.toString() + ") " + message[i]);
        response.write(classement.toString() + ") " + message[i] + '<br>');
  }
  response.end();
}

server.listen(3030);