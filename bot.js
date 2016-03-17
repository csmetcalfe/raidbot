var Botkit = require('botkit');
var http = require('http');
var picker = require('./picker');

//Lets define a port we want to listen to
const PORT = process.env.PORT || 8080;

var controller = Botkit.slackbot({
  debug: false
});

// connect the bot to a stream of messages
controller.spawn({
  token: process.env.SLACK_TOKEN
}).startRTM();

// give the bot something to listen for.
controller.hears('hello','direct_message,direct_mention,mention',function(bot,message) {
  bot.reply(message,'Hello yourself.');
});

controller.hears(['draw', 'pick', 'next', 'select', 'choose'],'direct_message,direct_mention,mention',function(bot,message) {
  bot.reply(message, "<@" + picker.selectRandomEngineer() + "> is on bug duty today :bug: :hammer:");
});



//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
