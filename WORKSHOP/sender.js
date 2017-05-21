#!/usr/bin/env node
var amqp = require('amqplib/callback_api');
amqp.connect('amqp://docker.cheetah.ac:5000', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'cheetah';
    var msg = 'Hi! We are the TEAM1.';
    ch.assertQueue(q, {durable: false});
    ch.sendToQueue(q, new Buffer(msg));
    console.log(" [x] Sent %s", msg);
  });
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});