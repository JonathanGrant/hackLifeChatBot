var page_token = ("EAAX1lBy2eA0BADUxBX1o3To7AAIff81kRKhsKqjAvJeiMn8VJW2Wd1ZAO0gdP3jN6B8MpdMza2NCeXPz2V0uJFzEgNMhARaxnrBt7mhZCTeitnD8xlDDOk3Ihqh7d5ZApgoc5RnCnNImWSOPqKPrMdRXBuD8vMKJxsk65bnagZDZD");
var verify_token = ("hacklifebot");
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var http = require('http').Server(app);

//////////////////////////////////////////////////
var Botkit = require('./lib/Botkit.js');
var controller = Botkit.facebookbot({
    debug: false,
    access_token: page_token,
    verify_token: verify_token
});

var bot = controller.spawn({

});

controller.hears(['hello', 'hi'], 'message_received', function(bot, message) {
    bot.reply(message, 'sup bruh! HACKLYFE');
});

// If you wanted your bot to respond to additional "hears" such as Go Heels 
// you could do that below using the same syntax from above.


//added to stop the debug tick remarks in console
controller.on('tick', function(bot, event) {});

controller.setupWebserver(process.env.port || 5000, function(err, webserver) {
    controller.createWebhookEndpoints(webserver, bot, function() {
        console.log('ONLINE!');

    });
});
